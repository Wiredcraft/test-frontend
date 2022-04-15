import { useEffect, useRef } from 'react';

export function useOnce(fn: any, deps: any[]) {
  const hasDone = useRef<boolean>(false);

  useEffect(() => {
    if (hasDone.current) {
      return;
    }
    fn();
    hasDone.current = true;
  }, [deps]);
}