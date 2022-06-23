import { useEffect } from 'react';
import { calculateColumnNum, debounce } from 'utils';
import { layoutSlice } from 'store/layoutSlice';
import { useAppDispatch } from 'store/hooks';

export default function ResizeDetecter() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let onResize: any = debounce(() => {
      dispatch(layoutSlice.actions.setColumnNum(calculateColumnNum()));
    }, 500);
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
      onResize = null;
    }
  }, []);
  return null;
}