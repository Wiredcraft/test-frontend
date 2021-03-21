import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import useGetImages from "hooks/useGetImages";

export default function GalleryPage() {
  const { filter } = useSelector((state) => state);
  const { images } = useGetImages();

  return (
    <div className="gallery">
      {images.map(
        (image) =>
          // partial matching
          image.name.includes(filter) && (
            <Card key={image.index} src={image.src} alt={image.name} />
          )
      )}
    </div>
  );
}
