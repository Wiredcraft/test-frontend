import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { MasonryContext } from './';
import Header from './components/Header';
import ImgItem from './components/ImgItem';
import './styles/index.scss';
import { debounce } from './utils/utils';

// Max column width
const MAX_WIDTH = 250;
const MIN_WIDTH = 200;

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { updateRenderImgList, keyword, renderImgList, getImages } = useContext(
    MasonryContext
  );
  let columnNum = 1;

  // fetch images
  useEffect(() => {
    columnNum = calcColumn();
    const getImgs = async () => {
      try {
        await getImages();
        updateRenderImgList(columnNum);
      } catch (e) {
        console.error(e.message);
      }
    };
    getImgs();
  }, []);

  // lazily update window width when window resizes
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', debounce(handleResize, 500));
    return window.removeEventListener('resize', handleResize);
  }, []);

  // rerender columns after window width changes
  useEffect(() => {
    columnNum = calcColumn();
    updateRenderImgList(columnNum);
  }, [windowWidth, keyword]);

  // lazy load image callback
  const imgObserver = useCallback((imgNode) => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const src = el.dataset.imgsrc;

          if (src) {
            el.src = src;
          }
          observer.unobserve(el);
        }
      });
    });
    observer.observe(imgNode);
  }, []);

  // image lazy load
  useEffect(() => {
    const imgs = document.querySelectorAll('.img-item__img');
    imgs.forEach(imgObserver);
  }, [renderImgList]);

  const calcColumn = () => {
    // content available width without padding
    const contentWidth = windowWidth - 100;
    const columnNum = Math.floor(contentWidth / MIN_WIDTH);
    return columnNum;
  };

  return (
    <div className='masonry'>
      <Header />
      <div className='masonry-body'>
        {renderImgList.map((col, i) => (
          <div className='column' key={i} style={{ maxWidth: MAX_WIDTH }}>
            {col
              ? col.map((img) => (
                  <ImgItem key={img._id} name={img.name} imgSrc={img.src} />
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(App);
