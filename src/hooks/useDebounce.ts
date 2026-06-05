import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}

export function useThrottle(callback, delay = 1000) {
  let isThrottling = false;
  return function (...args) {
    if (!isThrottling) {
      callback(...args);
      isThrottling = true;
      setTimeout(() => (isThrottling = false), delay);
    }
  };
}
