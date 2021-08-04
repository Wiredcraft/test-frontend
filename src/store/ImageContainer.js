import { createContainer } from 'unstated-next';
import { useState, useCallback, useRef, useEffect } from 'react';
import * as service from '../service';

// TODO:
const PAGE_SIZE = 20;

function useImages(initialState = []) {
  const [images, setImages] = useState(initialState);
  const currentPageNo = useRef(0);
  const currentKeyword = useRef('');


  const fetchImages = useCallback(params => {
    return service
      .fetchImageList({
        pageSize: PAGE_SIZE,
        pageNo: currentPageNo.current,
        keyword: currentKeyword.current,
        ...params
      })
      .then(res => {
        setImages(res);
      });
  }, []);

  useEffect(() => {
    fetchImages();
  }, [])


  const setPageNo = (pageNo) => {
    currentPageNo.current = pageNo;
    fetchImages();
  }


  const doSearch = (keyword) => {
    currentKeyword.current = keyword;
    fetchImages();
  };


  return {
    images, 
    setImages,
    doSearch,
    pageNo: currentPageNo.current,
    setPageNo
  };
}

export default createContainer(useImages);