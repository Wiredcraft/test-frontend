import React, {useEffect, useMemo, useRef, useState} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {buildColumnsWithMinimumHeightDiff, computeElementPositions} from "../../utils/masonry";
import {isScrollEnd} from "../../utils/scroll";
import {LoadStatus} from "../../const/load";

const Masonry = ({
                   responsive,
                   fetchingStatus,
                   rows,
                   offset,
                   count,
                   limit,
                   columnCount,
                   columnWidth,
                   itemPadding,
                   loadMore,
                   reload,
                   scrollThreshold,
                   containerStyle,
                 }) => {

  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
  const [displayRows, setDisplayRows] = useState([]);
  const [loadStatus, setLoadStatus] = useState(LoadStatus.Loading);
  const [childPositionList, setChildPositionList] = useState([]);
  const [maxColumnHeight, setMaxColumnHeight] = useState(0);

  const containerRef = useRef();

  const fitColumnCount = Math.floor(windowWidth / columnWidth) || 1;
  if (responsive && columnCount > fitColumnCount) columnCount = fitColumnCount;

  const handleLoadMore = () => {
    loadMore(offset + limit);
  };

  // set load status
  useEffect(() => {
    if (fetchingStatus === 'pending') {
      setLoadStatus(LoadStatus.Loading);
    } else if (fetchingStatus === 'success') {
      if (displayRows.length === 0 && rows.length === 0) {
        setLoadStatus(LoadStatus.Empty);
      } else if (displayRows.length >= count) {
        setLoadStatus(LoadStatus.NoMoreData);
      } else if (displayRows.length === offset + rows.length) {
        setLoadStatus(LoadStatus.Idle);
      } else if (displayRows.length < offset + rows.length) {
        setLoadStatus(LoadStatus.Loading);
      }
    } else if (fetchingStatus === 'failure') {
      setLoadStatus(LoadStatus.Failure);
    }
  }, [fetchingStatus, displayRows]);

  // reset displayRows when re-fetching
  useEffect(() => {
    if (fetchingStatus === 'pending' && offset === 0 && rows.length === 0) {
      setDisplayRows([]);
    }
  }, [fetchingStatus, offset]);

  // set resize event
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleResize = () => {
    setWindowWidth(document.body.clientWidth)
  };

  // set scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [fetchingStatus, offset, rows, displayRows, count, scrollThreshold]);

  const handleScroll = () => {
    if (
      fetchingStatus !== 'pending' &&
      offset + rows.length === displayRows.length &&
      offset + rows.length < count &&
      isScrollEnd(scrollThreshold)
    ) {
      handleLoadMore();
    }
  };

  // handle image onload and onerror
  const handleImageStatus = (eve, ele, i) => {
    displayRows.push({
      key: ele._id,
      src: ele.src,
      text: ele.text,
      alt: ele.name,
      height: eve.target.height * (columnWidth - 2 * itemPadding) / eve.target.width,
    });
    setDisplayRows([...displayRows]);
  };
  useMemo(() => {
    rows.forEach((ele, i) => {
      const image = new Image();
      image.src = ele.src;
      image.onload = (eve) => handleImageStatus(eve, ele, i);
      image.onerror = (eve) => handleImageStatus(eve, ele, i);
    });
  }, [rows]);

  // get masonry items from memo
  const children = useMemo(
    () =>
      displayRows.map((ele, i) => (
        <div
          className="item-wrap"
          key={ele.key}
          style={{
            width: columnWidth,
            padding: itemPadding,
          }}
        >
          <div
            className="image-wrap"
            style={{
              height: ele.height || 0,
            }}
          >
            <img
              className="image-item"
              src={ele.src}
              alt={ele.alt}
            />
          </div>
          <div className="text-wrap">
            <span className="text-item">
              {ele.text || ''}
            </span>
          </div>
        </div>
      )),
    [displayRows]
  );

  // compute child position and get the list
  useEffect(() => {
    // get all children of containerRef
    const childHeightList = _.map(containerRef.current.childNodes, (childNode, colIndex) => ({
      height: childNode.clientHeight,
      index: colIndex
    }));
    // remove the loading element height
    childHeightList.pop();
    // separate child into columns with minimum height differences
    const cols = buildColumnsWithMinimumHeightDiff(childHeightList, columnCount);
    // compute child position
    const childPositionList = computeElementPositions(cols, {columnWidth});
    setChildPositionList(childPositionList);
  }, [children, columnWidth, columnCount]);

  // compute the max height of the column
  useEffect(() => {
    setMaxColumnHeight(Math.max(...(childPositionList.slice(0, displayRows.length)).map(e => e.top + e.height)))
  }, [displayRows, childPositionList]);

  return (
    <div
      className="masonry"
      style={{width: columnWidth * columnCount, ...containerStyle}}
      ref={containerRef}
    >
      {_.map(children, (child, index) =>
        <div key={index}
             className="item-container"
             style={{
               left: childPositionList[index] ? childPositionList[index].left : -1000,
               top: childPositionList[index] ? childPositionList[index].top : -1000
             }}
        >
          {child}
        </div>
      )}
      {
        <div
          className={
            'loader ' +
            (loadStatus === LoadStatus.Idle || loadStatus === LoadStatus.Failure ? 'clickable' : '')
          }
          style={{
            top: isFinite(maxColumnHeight) ? maxColumnHeight : 0,
          }}
          onClick={
            loadStatus === LoadStatus.Idle && handleLoadMore ||
            loadStatus === LoadStatus.Failure && reload ||
            undefined
          }
        >
          {loadStatus}
        </div>
      }
    </div>
  );
};

Masonry.propTypes = {
  // is responsive or not
  responsive: PropTypes.bool.isRequired,
  // fetching masonry data status
  fetchingStatus: PropTypes.string,
  // rows of masonry data
  rows: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
  })).isRequired,
  // offset of current masonry data
  offset: PropTypes.number.isRequired,
  // the number of all data in the server that meets the query conditions
  count: PropTypes.number.isRequired,
  // maximum amount of data returned each time
  limit: PropTypes.number.isRequired,
  // all masonry columns count, if responsive is true, this will be the maximum count
  columnCount: PropTypes.number.isRequired,
  // width of each column
  columnWidth: PropTypes.number.isRequired,
  // padding of each masonry item
  itemPadding: PropTypes.number.isRequired,
  // function for loading more
  loadMore: PropTypes.func.isRequired,
  // function for reloading
  reload: PropTypes.func.isRequired,
  // scroll threshold for loading more
  scrollThreshold: PropTypes.number.isRequired,
  // masonry container style
  containerStyle: PropTypes.object,
};

Masonry.defaultProps = {
  responsive: true,
  rows: [],
  offset: 0,
  count: 0,
  limit: 0,
  columnCount: 6,
  columnWidth: 200,
  itemPadding: 5,
  loadMore: () => {
  },
  reload: () => {
  },
  scrollThreshold: 300,
};

export default Masonry;
