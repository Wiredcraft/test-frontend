import React, { useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import useGetImages from "hooks/useGetImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { setLoadmore } from "redux/actions";

export default function GalleryPage() {
  const { filter, error } = useSelector((state) => state);
  const { images } = useGetImages();
  const dispatch = useDispatch();
  // when component mount, load once
  useEffect(() => {
    dispatch(setLoadmore(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return error ? (
    <p>{error}</p>
  ) : (
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
                isLast={index === images.length - 1}
              />
            )
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
}
