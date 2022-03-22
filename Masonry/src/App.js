import { createStore } from 'redux';
import reducer from './Store/Reducer/reducer';
import { Provider } from 'react-redux';
import Masonry from './components/masonry';
import './App.scss';
import React from 'react';;



const store = createStore(reducer)

function App() {
  return (
   <React.Fragment>
     <Provider store={ store }>
       <Masonry />
     </Provider>
   </React.Fragment>

  );
}

export default App;
