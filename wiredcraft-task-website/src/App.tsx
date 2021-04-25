import './App.css';
import Masonry from './components/Masonry';
import Head from './components/Head';
import configureStore from './store'
import { Provider } from 'react-redux';

function App() {

  let store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <Head/>
        <Masonry/>
      </div>
      </Provider>
  );
}

export default App;
