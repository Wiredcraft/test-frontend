import React, { useEffect, useRef } from 'react';
import { usePicturesLazy } from '../contexts/PicturesContext';
import Masonry from './Masonry';

const Home = () => {
  const { fetchData, result } = usePicturesLazy();
  const chunk = useRef(1);

  useEffect(() => {
    fetchData(0);
    chunk.current = 1;
  }, []);

  return (
    <Masonry
      data={result.allData}
      loadingFirst={result.loadingFirst}
      loadingMore={result.loadingMore}
      error={result.error}
      isAll={result.isAll}
      fetchMore={() => fetchData(chunk.current++)}
    />
  );
};

export default Home;
