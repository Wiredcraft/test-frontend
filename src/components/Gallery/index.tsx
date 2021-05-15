// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './index.css';
import {getPictures} from './service';

export type LoadingProps = {
  tip?: string;
};

export type pictureCard = {
  id: string;
  index: number;
  name: string;
  src: string;
};

const Gallery: React.FC<LoadingProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pictureList, setPictureList] = useState<pictureCard[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const pictures = await getPictures();
      console.log(pictures.data);
      setPictureList(pictures.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      {isLoading ? 'loading' : ''}
      <div className="wc-columns">
        {pictureList.map((item) => (
          <div key={item.id} className="card">
           <img src={item.src}  className="img-thumbnail wc-picture" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
