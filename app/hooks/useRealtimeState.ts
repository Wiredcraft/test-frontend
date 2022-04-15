import { useRef, useState } from 'react'

export const useRealtimeState = <T>(val: T) => {
  const [state, setState] = useState(val);
  const stateRef = useRef(val);

  const _set = (val: T) => {
    stateRef.current = val;
    setState(val);
  }

  return [state, _set, () => stateRef.current] as const;
}
