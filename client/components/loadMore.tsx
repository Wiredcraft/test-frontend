import React, { useEffect, useState } from 'react';
import { fetchImageList, imageListSlice } from 'store/imageListSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSearchParam } from 'utils';
import ScrollDetecter from './scrollDetecter';
import { history } from '../index';

export default function LoadMore() {
  const dispatch = useAppDispatch();
  const { offset, hasMore } = useAppSelector((state) => state.imageList);
  const [search, setSearch] = useState(getSearchParam(history.location.search));

  useEffect(() => {
    history.listen(() => {
      const searchParam = getSearchParam(history.location.search);
      setSearch(searchParam);
    });
  }, [history.location.search]);

  useEffect(() => {
    dispatch(imageListSlice.actions.setOffset(0));
    dispatch(imageListSlice.actions.resetHasMore());
  }, [search]);

  useEffect(() => {
    if (hasMore) {
      dispatch(fetchImageList({ offset, search }));
    }
  }, [offset, hasMore, search])

  return <ScrollDetecter />
}