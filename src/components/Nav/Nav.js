import React, { Component } from 'react'
import styles from './Nav.module.scss'

export default class Nav extends Component {
  state = {
    active: 'overall'
  }

  onSelectedHandler = (e) => {
    this.setState({active: e.target.name})
  }

  render() {
    return (
    <div className={styles.Nav}>
      <div className={styles.profile}>
        <div>XY</div>
      </div>
      <div className={styles.title}>Reports</div>
      <a href='#/' className={this.state.active === 'overall' ? styles.Active : ''} name='overall' onClick={this.onSelectedHandler}>Overall</a>
      <a href='#/' className={this.state.active === 'specific' ? styles.Active : ''} name='specific' onClick={this.onSelectedHandler}>Specific</a>
    </div>
  )
  }
  
}
