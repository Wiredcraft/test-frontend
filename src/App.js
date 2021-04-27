import { createRef } from 'react';
import { observable, runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';

import './App.scss';

import scope from './images/scope.png';
import home from './images/home.png';
import bell from './images/bell.png';
import user from './images/user.png';

import data from './data.json';

const createMasonryStore = (rawItems) => {
  const store = observable({
    loading: false,
    items: [],
    columnNums: 6,
    searchWord: '',
    get columns() {
      const columns = [...new Array(this.columnNums)].map(() => []);
      this.items.filter((i) => (this.searchWord.length == 0) || (i.name.indexOf(this.searchWord) != -1) ).forEach((item, i) => {
        const col = i % this.columnNums;
        columns[col] = columns[col] || [];
        columns[col].push(item);
      });
      return columns;
    },
    loadMore(num) {
      if (!this.loading) {
        const toLoads = rawItems.slice(this.items.length, this.items.length + num);
        if (toLoads.length) {
          let loadedCount = 0;
          this.loading = true;
          toLoads.forEach((item) => {
            const img = new Image();
            img.src = item.src;
            const callback = () => {
              loadedCount += 1;
              if (loadedCount === toLoads.length) {
                store.items = [...store.items, ...toLoads];
                store.loading = false;
              }
            };
            img.addEventListener('load', callback);
            img.addEventListener('error', callback);
          });
        }
      }
    }
  });
  return store;
}

const store = createMasonryStore(data);

const loadMoreRefs = [];

const onScrollOrResize = () => {
  runInAction(() => {
    const wWidth = window.innerWidth;
    if (wWidth > 1200) {
      store.columnNums = 6;
    } else if ( wWidth > 900 ) {
      store.columnNums = 4;
    } else if ( wWidth > 720 ) {
      store.columnNums = 3;
    } else {
      store.columnNums = 2;
    }
    ([...new Array(store.columnNums)]).forEach((_, i) => {
      if (loadMoreRefs[i] && (loadMoreRefs[i].current) && (loadMoreRefs[i].current.getBoundingClientRect().top <= window.innerHeight)) {
        store.loadMore(24);
      }
    });
  });
}

const handleSearchChange = (e) => {
  store.searchWord = e.target.value;
}

const nextRequestAnimationFrame = () => {
  window.requestAnimationFrame(() => {
    onScrollOrResize();
    nextRequestAnimationFrame();
  });
}

nextRequestAnimationFrame();

const MasonryView = observer(({ store }) => {
  return (
    <div className="masonry-container">
      {store.columns.map((column, i) => {
        loadMoreRefs[i] = createRef();
        return <div key={i} className="masonry-col">
          {column.map((item, i) => {
            return <div key={item._id} className="masonry-item">
              <img src={item.src} alt={item.name} title={`${item.index}-${item.name}`} />
            </div>
          })}
          <div className="load-more" ref={loadMoreRefs[i]}>
            {store.loading && 'loading...'}
          </div>
        </div>
      })}
    </div>
  );
});

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <div className="nav">
          <div className="pull-right"></div>
          <div className="nav-search">
            <div className="search-box">
              <img src={scope} />
              <input onChange={handleSearchChange} />
             </div>
          </div>
          <div className="nav-item"><img src={home} /></div>
          <div className="nav-item"><img src={bell} /></div>
          <div className="nav-item"><img src={user} /></div>
        </div>
      </div>
      <div className="container">
        <MasonryView store={store} />
      </div>
    </div>
  );
}

export default App;