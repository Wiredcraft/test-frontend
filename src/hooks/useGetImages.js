import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetImages(query) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    // default api
    let API = "http://localhost:4000/pics";
    // if query
    if (query !== "") {
      API = `${API}?name=${query.toLowerCase()}`;
    }
    axios
      .get(API)
      .then((res) => {
        setImages(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [query]);

  return { images };
}
