import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RegionBar from '../RegionBar/RegionBar';

import './ContentArea.scss';

export default class ContentArea extends React.Component{
  constructor(){
    super();
  }
  render(){
    let voteInfoBars = this.props.voteDataList.map((item) => {
      return (
        item.display === false ? '' :
        <RegionBar {...item} areaTitles = {['State', 'District', 'Township']}
          canExpand = {item.subItemCount === 0 ? false : true}/>
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
