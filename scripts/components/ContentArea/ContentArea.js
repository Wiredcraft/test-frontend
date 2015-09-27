import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RegionBar from '../RegionBar/RegionBar';

import './ContentArea.scss';

//The mock data, TODO: add subItems
let data = [{
  title: 'Shan state',
  lastData: '2014/12/12',
  formsCounts: 123456,
  votersCounts: 123456,
  update: 342456,
  areaTitles: ['State', 'District', 'Township'],
  subItems: []}, {
  title: 'Shan state',
  lastData: '2014/12/12',
  formsCounts: 123456,
  votersCounts: 123456,
  update: 342456,
  areaTitles: ['State', 'District', 'Township'],
  subItems: []
}];

export default class ContentArea extends React.Component{
  constructor(){
    super();
  }
  render(){
    let voteInfoBars = data.map((item) => {
      return (
        <RegionBar {...item} canExpand={false}/>
      );
    });
    return (
      <div className={'ContentArea'}>

        <SearchBar filters={['Region', 'Last Inpot']}/>
        <RegionBar isTitle={true}/>
        {voteInfoBars}
      </div>
    );
  }
}

// <RegionBar {...data} canExpand={true} subItemCount={3} />
// <RegionBar {...data} canExpand={false}/>
// <RegionBar {...data} areaLevel ={1} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
// <RegionBar {...data} areaLevel ={2} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
// <RegionBar {...data} areaLevel ={2} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
// <RegionBar {...data} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
// <RegionBar {...data} areaLevel ={1} canExpand={true} areaTitles={['State', 'District', 'Township']}/>
// <RegionBar {...data} canExpand={false} areaTitles={['State', 'District', 'Township']}/>
