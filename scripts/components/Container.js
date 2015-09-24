import React from 'react';
import Header from './Header/Header'
import ContentArea from './ContentArea/ContentArea'

import './reset.scss'
import 'font-awesome/css/font-awesome.min.css'


export default class Container extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <ContentArea />
      </div>
    );
  }
}
