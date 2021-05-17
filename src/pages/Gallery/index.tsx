// eslint-disable-next-line
import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { getPictures } from './service';
import { pictureCard, searchParams } from '../../data.d';
import Loading from '../../components/Loading';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pictureList, setPictureList] = useState<pictureCard[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoSearchTip, setShowNoSearchTip] = useState(false);
  const [searchParams, setSearchParams] = useState<searchParams>({});
  const [currentPage, setCurrentPage] = useState(1);

  const updateSearch = async (searchQuery: string) => {
    setShowNoSearchTip(false);
    setSearchQuery(searchQuery);
    setCurrentPage(1);

   // reset picture data
    if(searchQuery.length === 0) {
      const pictures = await getPictures({search: '', page: 1});
      setPictureList(pictures.data.result);
      setIsLoading(true);
    }
  }

  const onSearchButtonClick = async () => {
    if(searchQuery.length === 0) {
      return;
    }
    const pictures = await getPictures({search: searchQuery, page: 1});
    if(pictures.data.result.length === 0){
      setPictureList([]);
      setShowNoSearchTip(true);
      setIsLoading(false);
      return;
    }
    setPictureList(pictures.data.result);
  }

  const onLoadMore = async (isLoading: boolean) => {
    if(isLoading){
      setIsLoading(false);
      setCurrentPage(currentPage+1);
      setSearchParams({search: searchQuery, page: currentPage+1});
    }
  }

  useEffect(() => {
    setShowNoSearchTip(false);
    console.log('current page', currentPage, searchParams);
    const fetchData = async () => {
      const pictures = await getPictures(searchParams);
      const results = pictures.data.result;
      if(results.length === 0){
        setIsLoading(false);
        return;
      }
      setPictureList(prevArray => [...prevArray, ...results]);
      setIsLoading(true);
    };
    fetchData();
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-auto">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={updateSearch}
          />
          </div>
          <div className="col-auto">
            <button 
              className="btn btn-outline-secondary" 
              type="button" 
              id="button-addon2"
              onClick={onSearchButtonClick} 
            >Search</button>
          </div>
        </div>
        <div className="wc-columns mt-2">
          {pictureList.map((item) => (
            <Card src={item.src} _id={item._id} name={item.name} key={item._id} />
          ))}
        </div>
        {showNoSearchTip ? (
          <div className="row mt-2">
            <p>no search result</p>
          </div>
        ) : '' }
      </div>
      {isLoading ? (
         <Loading  
         isLoading={isLoading}
         setIsLoading={onLoadMore}>
       </Loading>
      ) : ''}
    </div>
  );
};

export default Gallery;
