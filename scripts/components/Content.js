import React from 'react';
import SearchBar from './SearchBar';
import RegionBar from './RegionBar';

//The mock data, TODO: add subItems
let data = {
  title: 'Shan state',
  lastData: '2014/12/12',
  formsCounts: 123456,
  votersCounts: 123456,
  update: 342456,
  subItems:[]
}

export default class Content extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <SearchBar />
        <RegionBar source={data}/>
      </div>
    );
  }
}
