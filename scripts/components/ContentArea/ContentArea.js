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
  subItems: []
};

export default class ContentArea extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className={'ContentArea'}>
        <SearchBar filters={['Region', 'Last Inpot']}/>
        <RegionBar isTitle={true}/>
        <RegionBar source={data} canExpand={true} subItemCount={3} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} areaLevel ={1} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} areaLevel ={2} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} areaLevel ={2} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} areaLevel ={1} canExpand={true} areaTitles={['State', 'District', 'Township']}/>
        <RegionBar source={data} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
      </div>
    );
  }
}
