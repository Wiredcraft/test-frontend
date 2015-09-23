import React from 'react';
import SearchBar from './SearchBar';
import RegionBar from './RegionBar';
import { Paper } from 'material-ui';


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
        <Paper zDepth={2}>
          <RegionBar style={{display: 'inline-block'}} source={data}/>
        </Paper>
      </div>
    );
  }
}
