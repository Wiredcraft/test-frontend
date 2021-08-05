
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
  container
}) => {
  const nodeGap = 14;
  const initTop = 20;
  const nodeWidthWithGap = nodeWidth + nodeGap;
  const containerWidth = window.getComputedStyle(container).width.slice(0, -2);
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
      fn.apply(this, rest)
    }
    timer && clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, rest), wait)
  }
}