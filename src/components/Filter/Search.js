import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Search.css'

const ENTER_KEY = 13

class Search extends React.Component {
  render () {
    return (
      <div className={styles.search}>
        <input
          className={styles.input}
          ref='input'
          placeholder='Hit Enter to search'
          type='text'
          onKeyDown={this.handleKeyDown}
        />
        <span
          className={`icon-search ${styles.searchIcon}`}
          onClick={this.handleClick}
        />
      </div>
    )
  }

  handleKeyDown = event => {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault()
      const query = ReactDOM.findDOMNode(this.refs.input).value.trim()
      this.props.store.query(query)
    }
  }
  handleClick = () => {
    const query = ReactDOM.findDOMNode(this.refs.input).value.trim()
    this.props.store.query(query)
  }
}

export default Search
