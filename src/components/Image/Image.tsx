interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return <img src={src} alt={alt} />;
}

export default Image;
