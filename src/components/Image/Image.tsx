import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  windowWidth: number;
  col: number;
}

function Image({ src, alt, width, height, windowWidth, col }: Props) {
  const scaledWidth =
    (Math.min(windowWidth, 1280) - 20 * 2 - 14 * (col - 1)) / col;
  const scaledHeight = height * (scaledWidth / width);
  return (
    <LazyLoadImage
      alt={alt}
      height={scaledHeight}
      src={src}
      width={scaledWidth}
      effect="opacity"
    />
  );
}

export default Image;
