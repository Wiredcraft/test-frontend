import React from 'react';
import Header from './Header/Header';
import ContentArea from './ContentArea/ContentArea';
import VoteInfoStore from '../stores/VoteInfoStore';

import './reset.scss';
import 'font-awesome/css/font-awesome.min.css';

export default class Container extends React.Component{
  constructor(){
    super();
    this.state = {
      voteInfoList: []
    };
    this._onChange = this._onChange.bind(this);
  }
  _onChange(){
    this.setState({voteInfoList: VoteInfoStore.getVoteDataList()});
  }
  componentDidMount(){
    VoteInfoStore.addChangeListener(this._onChange);
    this._onChange();
  }
  componentWillUnmount(){
    VoteInfoStore.removeChangeListener(this._onChange);
  }
  render(){
    return (
      <div>
        <Header />
        <ContentArea voteDataList={this.state.voteInfoList}/>
      </div>
    );
  }
}
