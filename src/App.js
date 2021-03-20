import { Route, Switch } from "react-router-dom";
import TopBar from "components/TopBar";
import GalleryPage from "pages/GalleryPage";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={GalleryPage} />
        <Route path="*" component={() => <>404 Not Found</>} />
      </Switch>
    </div>
  );
}

export default App;
