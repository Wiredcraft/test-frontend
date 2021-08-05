import { useEffect } from 'react';
import { throttle } from '../common/uitils';

function useResize ({ onResize }) {
  useEffect(() => {
    const listener = throttle(onResize, 500);
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [onResize]);
}

export default useResize;