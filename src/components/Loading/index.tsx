// eslint-disable-next-line
import React, { useState, useRef, RefObject } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';

const Loading = ({isLoading, setIsLoading} : any) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const {isIntersecting} = useIntersectionObserver(ref, {threshold: 1});
  setIsLoading(isIntersecting);

  return (
    <div>
      <div className="text-center m-5" ref={ref}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
         </div>
      </div> 
    </div>
  )
};

export default Loading;
