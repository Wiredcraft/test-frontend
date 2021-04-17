import React, { useEffect, useMemo, useState } from 'react';
import {
  usePictures,
  useMorePictures,
  TPicture,
} from '../contexts/PicturesContext';
import useWindowSize from './useWindowSize';
import { debounce } from 'lodash';

let chunk = 1;

const Masonry = () => {
  const { data, loading, error } = usePictures();
  const { fetchMore, result, called } = useMorePictures();
  const [isNoMore, setIsNoMore] = useState(false);
  const [width] = useWindowSize();
  const { columnWidth, columnTotal } = getColumnWidthAndTotal(width);

  useEffect(() => {
    const fetchMoreDebounce = debounce(() => fetchMore(chunk++), 1000, {
      leading: true,
    });
    scrollForMore(fetchMoreDebounce);
  }, []);

  useEffect(() => {
    if (result.data.length === 0 && called) setIsNoMore(true);
  }, [result, called]);

  const columns = useMemo(() => {
    if (data.length === 0) return [];

    const cols = getColumnedPictures(columnTotal, data);

    return cols;
  }, [data, width]);

  if (loading) return <p className="loader">fancy loader</p>;

  if (error) return <p className="error-msg">fancy error message</p>;

  return (
    <div>
      <div className="masonry">
        {columns.map((col, idx) => (
          <div className="column" key={idx} style={{ width: columnWidth }}>
            {col.map((pic) => (
              <img className="picture" src={pic.src} key={pic._id} />
            ))}
          </div>
        ))}
      </div>
      {isNoMore && (
        <div className="bottom">
          <hr />
          {'fancy bottom'}
        </div>
      )}
    </div>
  );
};

function getColumnWidthAndTotal(windowWidth: number) {
  const PHONE_WIDTH = 414;
  const TABLET_WIDTH = 768;

  let columnWidth, columnTotal;

  if (windowWidth <= PHONE_WIDTH) {
    columnWidth = 160;
    columnTotal = Math.floor((windowWidth * 0.95) / columnWidth);
  } else if (windowWidth <= TABLET_WIDTH) {
    columnWidth = 180;
    columnTotal = Math.floor((windowWidth * 0.8) / columnWidth);
  } else {
    columnWidth = 240;
    columnTotal = Math.floor((windowWidth * 0.8) / columnWidth);
  }
  return { columnWidth, columnTotal };
}

// todo: use useRef to keep the last columnedPictures
function getColumnedPictures(columnTotal: number, data: TPicture[]) {
  const cols = [] as TPicture[][];

  for (let j = 0; j < columnTotal; j++) {
    cols.push([]);
  }
  console.log('columnTotal', columnTotal);
  console.log('cols', cols);

  for (let i = 1; i <= data.length; i++) {
    let colNum = null;
    if (i % columnTotal !== 0) {
      colNum = (i % columnTotal) - 1;
    } else {
      colNum = columnTotal - 1;
    }

    cols[colNum].push(data[i - 1]);
  }

  return cols;
}

function scrollForMore(getPic: () => void) {
  window.addEventListener(
    'scroll',
    () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        getPic();
      }
    },
    {
      passive: true,
    }
  );
}

export default Masonry;
