import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // default api
    let API = "http://localhost:4000/pics";
    axios
      .get(API)
      .then((res) => {
        setImages(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return { images };
}
