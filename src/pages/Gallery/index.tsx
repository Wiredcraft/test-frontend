// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './index.css';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { pictureCard } from '../../data.d';
import Loading from '../../components/Loading';
import { useSelector } from "react-redux";
import useLoadPictures from './useLoadPictures';
import { rootState } from '../../redux/reducers';
import { LOAD_MORE_STATUS } from "../../redux/types";

const Gallery = () => {
  const pictureList:pictureCard[] = useSelector((state:rootState) => state.load.pictureList);
  const loadMoreStatus = useSelector((state:rootState) => state.loadMore.loadMoreStatus);
  const loadingStatus = useLoadPictures(loadMoreStatus);
  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-auto">
          <SearchBar />
          </div>
        </div>
        <div className="wc-columns mt-2">
          {pictureList.map((item) => (
            <Card src={item.src} _id={item._id} name={item.name} key={item._id} />
          ))}
        </div>
        {pictureList.length === 0 && loadingStatus === LOAD_MORE_STATUS.STOP ? (
          <div className="row mt-2">
            <p>no search result</p>
          </div>
        ) : '' }
      </div>
      {loadingStatus === LOAD_MORE_STATUS.STOP ? '' : <Loading  />}
    </div>
  );
};

export default Gallery;
