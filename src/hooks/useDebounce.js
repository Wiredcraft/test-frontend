import { useRef, useCallback } from 'react';

const debounce = (func, wait) => {
  let timeout;
  return function debounced(...args) {
    const ctx = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(ctx, args);
    }, wait);
  };
};

export default function useDebounce(fn, ms = 300) {
  const fRef = useRef();
  fRef.current = fn;

  const result = useCallback(
    debounce(() => fRef.current(), ms),
    []
  );
  return result;
}
