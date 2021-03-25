import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoadmore, setError } from "redux/actions";

export default function useGetImages() {
  const [images, setImages] = useState([]);
  const { loadMore } = useSelector((state) => state);
  const dispatch = useDispatch();
  const getImages = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API);
      setImages([...images, ...res.data]);
      dispatch(setLoadmore(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  // get images if loadMore === true
  useEffect(() => {
    if (loadMore) {
      getImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore]);

  return { images };
}
