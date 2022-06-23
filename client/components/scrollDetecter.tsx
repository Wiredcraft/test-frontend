import React, { useEffect } from 'react';
import { imageListSlice } from 'store/imageListSlice';
import { shouldLoadMore, throttle } from 'utils';
import { useAppDispatch } from 'store/hooks';

export default function ScrollDetecter() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let intersectionObserver: IntersectionObserver;
    let onScroll: any;

    if (!window.IntersectionObserver) {
      onScroll = throttle(() => {
        if (shouldLoadMore()) {
          dispatch(imageListSlice.actions.addOffset());
        }
      }, 500);
      dispatch(imageListSlice.actions.addOffset());
      window.addEventListener('scroll', onScroll);
    } else {
      onScroll = throttle(() => {
        dispatch(imageListSlice.actions.addOffset());
      }, 1000);
      intersectionObserver = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio > 0){
          onScroll();
        }
      });
      const masonry = document.querySelector('.observer');
      if (masonry) {
        intersectionObserver.observe(masonry);
      }
    }
    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      if (onScroll) {
        onScroll = null;
      }
    }
  }, []);

  return window.IntersectionObserver ? (<div className="observer">observer</div>) : null;
}