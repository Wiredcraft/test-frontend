// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './index.css';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { getPictures } from './service';
import { pictureCard } from '../../data.d';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pictureList, setPictureList] = useState<pictureCard[]>([]);
  const [filteredPictureList, setFilteredPictureList] = useState<pictureCard[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearch = async (searchQuery: string) => {
    setFilteredPictureList(pictureList);
    setSearchQuery(searchQuery);
  }

  const onSearchButtonClick = () => {
    const filtered = pictureList.filter((item: pictureCard) => {
      return item.name === searchQuery;
    })
    setFilteredPictureList(filtered);
  }
 
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const pictures = await getPictures();
      setPictureList(pictures.data);
      setFilteredPictureList(pictures.data);
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
        {isLoading ? 'loading' : ''}
        <div className="wc-columns">
          {filteredPictureList.map((item) => (
            <Card src={item.src} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
