import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RegionBar from '../RegionBar/RegionBar';

import './ContentArea.scss';

//The mock data, TODO: add subItems
let data = {
  title: 'Shan state',
  lastData: '2014/12/12',
  formsCounts: 123456,
  votersCounts: 123456,
  update: 342456,
  subItems:[]
}

export default class ContentArea extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className={'ContentArea'}>
        <SearchBar />
        <RegionBar style={{display: 'inline-block'}} isTitle={true} source={data}/>
        <RegionBar style={{display: 'inline-block'}} source={data}/>
        <RegionBar style={{display: 'inline-block'}} source={data}/>
        <RegionBar style={{display: 'inline-block'}} source={data}/>
        <RegionBar style={{display: 'inline-block'}} source={data}/>
      </div>
    );
  }
}
