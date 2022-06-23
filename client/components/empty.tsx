import React from 'react';
import { useAppSelector } from 'store/hooks';
import Empty from './icons/empty';

export default function EmptyComponent(): React.ReactElement | null {
  const { list, hasMore, loading } = useAppSelector((state) => state.imageList);
  const showEmpty = !list.length && !hasMore && !loading;

  if (!showEmpty) {
    return null;
  }

  return (
    <div className="empty" aria-label="empty">
      <Empty />
      <p>No image found</p>
    </div>
  )
};
