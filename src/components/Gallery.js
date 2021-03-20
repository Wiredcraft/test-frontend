import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "./Card";
import { useSelector } from "react-redux";
import axios from "axios";

const columnsCountBreakPoints = {
  0: 1,
  576: 2,
  768: 3,
  992: 4,
  1200: 6,
};
const gutter = "10px";

export default function Gallery() {
  const { filter } = useSelector((state) => state);
  const [images, setimages] = useState([]);

  useEffect(() => {
    let API = "http://localhost:4000/pics";
    if (filter !== "") {
      API = `${API}?name=${filter.toLowerCase()}`;
    }
    axios
      .get(API)
      .then(function (response) {
        const { data } = response;
        setimages(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      setimages([]);
    };
  }, [filter]);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {images.map((image, i) => (
          <Card key={i} src={image.src} alt={image.name} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
