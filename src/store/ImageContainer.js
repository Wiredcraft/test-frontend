import { createContainer } from 'unstated-next';
import { useState, useRef, useEffect } from 'react';
import * as service from '../service';
import { addSize } from '../common/uitils';

const PAGE_SIZE = 20;

function useImages(initialState = []) {
  const [images, setImages] = useState(initialState);
  const [fetching, setFetching] = useState(false);
  const currentPageNo = useRef(0);
  const currentKeyword = useRef('');
  const hasMoreRef = useRef(true);


  const fetchImages = params => {
    setFetching(true);

    return service
      .fetchImageList({
        pageSize: PAGE_SIZE,
        pageNo: currentPageNo.current,
        keyword: currentKeyword.current,
        ...params
      });
  };


  const setPageNo = (pageNo) => {
    currentPageNo.current = pageNo;
    fetchImages().then(res => {

      setImages(prevImages =>  {
        const rawImgaes = pageNo === 0
          ? res
          : prevImages.concat(res);

        return rawImgaes.map(addSize);
      });
    });
  }

  const doSearch = (keyword) => {
    currentKeyword.current = keyword;
    setPageNo(0);
  };

  const loadMore = () => hasMoreRef.current && setPageNo(++currentPageNo.current);


  useEffect(() => {
    setPageNo(0);
  }, []);


  useEffect(() => {
    setFetching(false);
  }, [images]);


  return {
    images, 
    fetching,
    setImages,
    doSearch,
    loadMore,
    setPageNo
  };
}

export default createContainer(useImages);