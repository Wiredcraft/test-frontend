import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoadmore } from "redux/actions";

export default function useGetImages() {
  const [images, setImages] = useState([]);
  const { loadMore } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loadMore) {
      // default api
      let API = "http://localhost:4000/pics";
      axios
        .get(API)
        .then((res) => {
          setImages([...images, ...res.data]);
          dispatch(setLoadmore(false));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [loadMore]);

  return { images };
}
