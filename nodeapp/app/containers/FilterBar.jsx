import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators  } from 'redux'
import TableFilter from '../components/TableFilter'
import * as FilterActionCreator from '../actions/filters.js'
import * as RegionsActionCreator from '../actions/regions.js'

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    activeIndex: state.filters.activeIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, FilterActionCreator, RegionsActionCreator), dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class FilterBar extends Component {
  render() {
    return (
      <TableFilter {...this.props} />
    )
  }
}
