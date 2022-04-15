import React, { Fragment, useEffect, useRef } from 'react';
import GalleryMasonryLayoutItem from './MasonryLayoutItem'
import './index.scss';
import { useAppSelector, useAppDispatch } from '../../models/hooks'
import { selectData, selectStatus, loadData } from './slice'
import { useOnce } from '../../hooks/useOnce'
import { masonryLayout } from './helpers/masonry';

function Gallery() {
  const data = useAppSelector(selectData)
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch();

  const containerRef = useRef<HTMLDivElement | null>(null);

  useOnce(() => {
    masonryLayout.init({
      columnWidth: 214,
      columnMinNum: 2,
      width: containerRef.current?.offsetWidth ?? 0,
    });
  }, [])



  const loadMore = () => dispatch(loadData())

  // 判断是否撑满屏幕
  const hasLeftSpace = () => {
    const dom = containerRef.current!;
    const scrollTop = dom.scrollTop;
    const viewportHeight = dom.offsetHeight;
    const hasLeft = masonryLayout?.colMinHeight < viewportHeight + scrollTop;
    return hasLeft;
  };

  // 判断是否拉取数据
  const checkThenLoad = () => {
    if (status === 'nomore') {
      return;
    }
    if (hasLeftSpace()) {
      loadMore()
    }
  }

  // 最初没有数据+数据变化时，检查数据是否够撑满屏幕，没有则拉取数据
  useEffect(checkThenLoad, [data]);

  // 滚动加载
  useOnce(() => {
    const onScroll = () => {
      checkThenLoad();
    };
    const dom = containerRef.current!;
    dom.addEventListener('scroll', onScroll);
    return () => {
      dom.removeEventListener('scroll', onScroll);
    }
  }, []);


  return (
    <div className="gallery-container" ref={containerRef}>
      <div
        className="gallery-layout-container"
        style={{
          height: masonryLayout?.colMaxHeight,
          width: masonryLayout?.containerWidth
        }}
      >
        {data.map((item) => (
          <GalleryMasonryLayoutItem key={item._id} item={item} />
        ))}
      </div>
      {status !== 'init' && <div>{status}</div>}
    </div>
  );

}

export default Gallery;
