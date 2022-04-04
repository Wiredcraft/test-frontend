import Masonry from "./components/Masonry/Masonry";
import Navigation from "./components/Navigation/Navigation";
import "./app.scss";
import getPictures, { Picture } from "./utils/api";
import { useEffect, useState } from "react";

function App() {
  const [matrix, setMatrix] = useState<Picture[][]>([[]]);

  useEffect(() => {
    (async () => {
      const matrix = await getPictures();
      setMatrix(matrix);
    })();
  }, []);

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
