import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import useGetImages from "hooks/useGetImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function GalleryPage() {
  const { filter } = useSelector((state) => state);
  const { images } = useGetImages();
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3, 900: 4, 1200: 6 }}
    >
      <Masonry gutter="10px">
        {images.map(
          (image, index) =>
            // partial matching
            image.name.includes(filter) && (
              <Card
                key={index}
                src={image.src}
                alt={image.name}
                index={index}
              />
            )
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
}
