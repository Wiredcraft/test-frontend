import React from 'react';
import SearchBar from './SearchBar';
import RegionBar from './RegionBar';
import { Paper } from 'material-ui';

import './Content.scss';

//The mock data, TODO: add subItems
let data = {
  title: 'Shan state',
  lastData: '2014/12/12',
  formsCounts: 123456,
  votersCounts: 123456,
  update: 342456,
  subItems:[]
}

//38 14 16 16

export default class Content extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className={'ContentContainer'}>
          <Paper className={'ContentArea'} zDepth={2}>
            <SearchBar />
            <RegionBar style={{display: 'inline-block'}} source={data}/>
          </Paper>
      </div>
    );
  }
}
