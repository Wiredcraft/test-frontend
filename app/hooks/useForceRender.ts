import { useReducer } from 'react';

export function useForceRender() {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  return forceUpdate;
}
