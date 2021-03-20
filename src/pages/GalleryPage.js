import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import useGetImages from "hooks/useGetImages";

export default function GalleryPage() {
  const { query } = useSelector((state) => state);
  const { images } = useGetImages(query);

  return (
    <div className="gallery">
      {images.map((image) => (
        <Card key={image.index} src={image.src} alt={image.name} />
      ))}
    </div>
  );
}
