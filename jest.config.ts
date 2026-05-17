import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom',
    rootDir: './',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
        '\\.(css|scss|sass)$': '<rootDir>/test/mocks/styleMock.js',
    }
}

export default config;