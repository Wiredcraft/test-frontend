import React from 'react';
import { useAppSelector } from 'store/hooks';
import Loading from './icons/loading';

export default (): React.ReactElement | null => {
  const loading = useAppSelector((state) => state.imageList.loading);
  if (!loading) {
    return null;
  }
  return (
    <div className="loading">
      <Loading />
    </div>
  );
}
