import React, { Component } from 'react';
import { connect } from 'react-redux'
import Panel from '../component/panel'

const mapStateToProps = (filter) => {
  return {
    level:filter.level,
    keyWord:filter.keyWord
  }
}

export default connect(mapStateToProps)(Panel)