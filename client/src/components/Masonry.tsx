import React, { useMemo } from 'react';
import {
  usePictures,
  useMorePictures,
  TPicture,
} from '../contexts/PicturesContext';
import useWindowSize from './useWindowSize';

let num = 2;

const Masonry = () => {
  const { data, loading, error } = usePictures();
  const { fetchMore, result } = useMorePictures();
  const [width] = useWindowSize();
  const { columnWidth, columnTotal } = getColumnWidthAndTotal(width);

  const columns = useMemo(() => {
    if (data.length === 0) return [];

    const cols = getColumnedPictures(columnTotal, data);

    return cols;
  }, [data, width]);

  if (loading) return <p>loading</p>;

  if (error) return <p>error :/</p>;

  return (
    <div>
      <button onClick={() => fetchMore(num++)}>
        {result.loading ? 'loading' : 'more!'}
      </button>
      <div className="masonry">
        {columns.map((col, idx) => (
          <div className="column" key={idx} style={{ width: columnWidth }}>
            {col.map((pic) => (
              <img className="picture" src={pic.src} key={pic._id} />
            ))}
          </div>
        ))}
      </div>
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

export default Masonry;
