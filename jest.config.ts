import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  rootDir: "./",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@styles/(.*\\.css)$": "<rootDir>/test/mocks/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@models/(.*)$": "<rootDir>/src/models/$1",
    "^@contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@types/(.*)$": "<rootDir>/types/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js",
    "\\.(css|scss|sass)$": "<rootDir>/test/mocks/styleMock.js",
  },
};

export default config;
