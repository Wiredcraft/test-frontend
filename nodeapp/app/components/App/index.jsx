import React, { Component } from 'react'
import Nav from '../Nav'
import VisibleRegionList from '../../containers/VisibleRegionList'
import FilterBar from '../../containers/FilterBar'
import styles from './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FilterBar />
        <VisibleRegionList />
      </div>
    )
  }
}
