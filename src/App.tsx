/* eslint-disable react-hooks/exhaustive-deps */
import Masonry from "./components/Masonry/Masonry";
import Navigation from "./components/Navigation/Navigation";
import "./app.scss";
import getPictures, { Picture } from "./utils/api";
import { useEffect, useLayoutEffect, useState } from "react";
import { refresh } from "./redux/matrix/matrix";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const [windowWidth, setWindowSize] = useState<number>(window.innerWidth);
  const [pictures, setPictures] = useState<Picture[]>([]);
  const matrix = useAppSelector((state) => state.matrix);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    (async () => {
      const pictures = (await getPictures()).data;
      setPictures(pictures);
      dispatch(refresh({ pictures, windowWidth }));
    })();
  }, [dispatch]);

  useLayoutEffect(() => {
    if (!windowWidth || pictures.length === 0) {
      return;
    }
    dispatch(refresh({ pictures, windowWidth }));
  }, [windowWidth]);

  return (
    <div className="app">
      <Navigation />
      <div className="masonry-container">
        <Masonry picMatrix={matrix} windowWidth={windowWidth} />
      </div>
    </div>
  );
}

export default App;
