import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePicturesLazy } from '../contexts/PicturesContext';
import Masonry from './Masonry';

const Search = () => {
  const { fetchData, result } = usePicturesLazy();
  const location = useLocation();
  const chunk = useRef(1);
  const searchTerm = useRef(location.pathname.replace('/search/', '')); // useRef to deal with stale closure

  useEffect(() => {
    searchTerm.current = location.pathname.replace('/search/', '');
    fetchData(0, searchTerm.current);
    chunk.current = 1;
  }, [location]);

  return (
    <Masonry
      data={result.allData}
      loadingFirst={result.loadingFirst}
      loadingMore={result.loadingMore}
      error={result.error}
      isAll={result.isAll}
      fetchMore={() => fetchData(chunk.current++, searchTerm.current)}
    />
  );
};

export default Search;
