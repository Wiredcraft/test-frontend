/**
 * custom units tool
 * Sat Jul 25 01:20:13 2020
 * by xiaoT
 */

interface ImageSize {
  width: number;
  height: number;
  rate: number; // width / height
}
export const calcImageSize = (url: string): ImageSize => {
  const URLObj = new URL(url)
  const pathname: string = URLObj.pathname
  const width: number = +pathname.split('/')[1]
  const height: number = +pathname.split('/')[2]
  return {
    width,
    height,
    rate: width / height
  }
}
