import { useEffect } from 'react';

function useResize ({ onResize }) {
  useEffect(() => {
    const listener = onResize;
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [onResize]);
}

export default useResize;