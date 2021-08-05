
/**
 *
 * get width and height from url 
 * @param {*} url
 * @returns
 */
export const getSizeFromImageUrl = url => {
  const [width, height] = url.match(/\/\d+/g);

  return {
    width: width.replace('/', ''),
    height: height.replace('/', '')
  };
}


/**
 * 
 * 
 * @param {*} image
 */
export const addSize = image => ({
  ...image,
  ...getSizeFromImageUrl(image.src)
});


/**
 *
 *
 * @param {*} { 
 *   nodeWidth,
 *   nodeIndex,
 *   images,
 *   currentImage,
 *   container
 * }
 * @returns
 */
export const calcNodeStyle = ({ 
  nodeWidth,
  nodeIndex,
  images,
  currentImage,
  containerWidth
}) => {
  const nodeGap = 14;
  const initTop = 20;
  const nodeWidthWithGap = nodeWidth + nodeGap;
  const colCount = Math.floor(containerWidth / nodeWidthWithGap);


  const nodeStyle = {
    width: nodeWidth,
    height: currentImage.height * (nodeWidth /  currentImage.width),
    left: nodeWidthWithGap * (nodeIndex % colCount),
    top: initTop
  }

  if (nodeIndex >= colCount) {
    const top = images
      .filter((_, idx) => ((nodeIndex -idx ) % colCount === 0 && idx < nodeIndex))
      .reduce((res, current) => (res + current.height * (nodeWidth / current.width) + nodeGap), 0);
    nodeStyle.top = top + initTop;
  }
  
  return nodeStyle;
}


/**
 *
 *
 * @param {*} fn
 * @param {*} wait
 * @param {*} imme
 * @returns
 */
export const debounce = (fn, wait, imme) => {
  let timer = 0;

  return function(...rest) {
    if (imme && !timer) {
      fn.apply(this, rest);
    }
    timer && clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, rest), wait);
  }
}

/**
 *
 *
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
export const throttle = (fn, wait) => {
  let lastTime;

  return function(...rest) {
    if (!lastTime || Date.now() - lastTime > wait) {
        lastTime = Date.now();
        fn.apply(this, rest);
    }
  }
}

export const getContainerWidth = wrapperWidth => {
  // column count 6
  if (wrapperWidth >= 1300) {
    return 1300;
  }

  // column count 5
  if (wrapperWidth >= 1070 && wrapperWidth < 1300) {
    return 1070
  }

  // column count 4
  if (wrapperWidth >= 856 && wrapperWidth < 1070) {
    return 856
  }

  // column count 3
  if (wrapperWidth >= 642 && wrapperWidth < 856) {
    return 642
  }

  // column count 2
  if (wrapperWidth < 642) {
    return 428
  }
}