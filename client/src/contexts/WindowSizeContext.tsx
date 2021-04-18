import * as React from 'react';
import { useState, useContext, createContext, useLayoutEffect } from 'react';

type TWindowSizeContext = [number, number];

const WindowSizeContext = createContext<TWindowSizeContext | undefined>(
  undefined
);

function useWindowSize() {
  const context = useContext(WindowSizeContext);

  if (!context)
    throw new Error('useWindowSize must be used within a PicturesProvider');

  return context;
}

function WindowSizeProvier(props: any) {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return <WindowSizeContext.Provider value={size} {...props} />;
}

export { WindowSizeProvier, useWindowSize };
