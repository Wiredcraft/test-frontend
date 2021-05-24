import React, { useRef, useEffect } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useDispatch } from "react-redux";
import { loadMore } from "../../redux/actions";
import { LOAD_MORE_STATUS } from "../../redux/types";

const Loading = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const {isIntersecting} = useIntersectionObserver(ref, {threshold: 1});
  const dispatch = useDispatch();
  useEffect(() => {
    if(isIntersecting) {
      dispatch(loadMore(LOAD_MORE_STATUS.LOADING));
    }
  }, [isIntersecting]);

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
