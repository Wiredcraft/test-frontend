import Masonry from "./components/Masonry/Masonry";
import Navigation from "./components/Navigation/Navigation";
import "./app.scss";
import getPictures from "./utils/api";
import { useEffect } from "react";
import { refresh } from "./redux/matrix/matrix";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const matrix = useAppSelector((state) => state.matrix);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const pictures = (await getPictures()).data;
      dispatch(refresh({ pictures }));
    })();
  }, [dispatch]);

  return (
    <div className="app">
      <Navigation />
      <div className="masonry-container">
        <Masonry picMatrix={matrix} />
      </div>
    </div>
  );
}

export default App;
