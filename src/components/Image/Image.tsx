interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Image({ src, alt, width, height }: Props) {
  return <img data-src={src} alt={alt} />;
}

export default Image;
