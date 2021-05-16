// eslint-disable-next-line
import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { getPictures } from './service';
import { pictureCard } from '../../data.d';
import useIntersectionObserver from '@react-hook/intersection-observer'

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pictureList, setPictureList] = useState<pictureCard[]>([]);
  const [filteredPictureList, setFilteredPictureList] = useState<pictureCard[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoSearchTip, setShowNoSearchTip] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null)
  const { isIntersecting } = useIntersectionObserver(ref);

  console.log(`Render Section { isIntersecting }`);

  const updateSearch = async (searchQuery: string) => {
    setShowNoSearchTip(false);
    setFilteredPictureList(pictureList);
    setSearchQuery(searchQuery);
  }

  const onSearchButtonClick = () => {
    const filtered = pictureList.filter((item: pictureCard) => {
      return item.name === searchQuery;
    })
    if(filtered.length == 0){
      setShowNoSearchTip(true);
    }
    setFilteredPictureList(filtered);
  }
 
  useEffect(() => {
    setIsLoading(true);
    setShowNoSearchTip(false);
    const fetchData = async () => {
      const pictures = await getPictures(1);
      setPictureList(pictures.data.result);
      setFilteredPictureList(pictures.data.result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

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
        <div className="wc-columns mt-2" ref={ref}>
          {filteredPictureList.map((item) => (
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
          <div className="text-center m-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
         : ''}
    </div>
  );
};

export default Gallery;
