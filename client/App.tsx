import React from 'react';
import Header from './components/Header';
import List from './components/list';
import Search from './components/Header/searchInput';
import Panel from './components/Header/Panel';
import ResizeDetecter from './components/resizeDetecter';
import LoadMore from './components/loadMore';
import Loading from './components/loading';
import Empty from './components/empty';
import './App.less';

export default function App(): React.ReactElement {
  return (
    <>
      <ResizeDetecter />
      <Header>
        <Search />
        <Panel />
      </Header>
      <List />
      <Loading />
      <Empty />
      <LoadMore />
    </>
  )
}