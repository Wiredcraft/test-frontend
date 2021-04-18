import { debounce } from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { TPicture } from '../contexts/PicturesContext';
import { useWindowSize } from '../contexts/WindowSizeContext';

type TProps = {
  data: TPicture[];
  loadingFirst: boolean;
  loadingMore: boolean;
  error: undefined | Error;
  isAll: boolean;
  fetchMore: () => void;
};

const Masonry = ({
  data = [],
  loadingFirst,
  loadingMore,
  error,
  isAll,
  fetchMore,
}: TProps) => {
  const [width] = useWindowSize();
  const { columnWidth, columnTotal } = getColumnWidthAndTotal(width);

  useEffect(() => {
    // debounce still looks buggy
    const loadMore = debounce(fetchMore, 1000, {
      leading: true,
    });
    const cb = () => scrollForMore(loadMore);

    window.addEventListener('scroll', cb, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, []);

  const columns = useMemo(() => {
    const cols = getColumnedPictures(columnTotal, data);

    return cols;
  }, [data, width]);

  if (loadingFirst) return <p className="loader-first">full screen loader</p>;
  if (error) return <p className="error-msg">error message</p>;
  if (data.length === 0) return <p className="error-msg">no result found</p>;

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
      {loadingMore && <p className="loader-more">small loader</p>}
      {isAll && (
        <div className="bottom">
          <hr />
          <p className="no-more">{'fancy bottom. no more.'}</p>
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

// can make it work with last returned value to do least work at each render
function getColumnedPictures(columnTotal: number, data: TPicture[]) {
  const cols = [] as TPicture[][];

  for (let j = 0; j < columnTotal; j++) {
    cols.push([]);
  }
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
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    getPic();
  }
}

export default Masonry;
