import React from 'react'
import styles from './Search.module.scss';
import PropTypes from 'prop-types'

export default function Search(props) {
  // onSearchClicked() triggers the redux state of user entered text and selected type if applicable
  return (
    <React.Fragment>
      <input type='text' className={styles.input} placeholder='Search' onChange={props.onSearchChange}/>
      <i className="fas fa-search" onClick={props.onSearchClicked}></i>
    </React.Fragment>
  )
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired, // update the value of input fields
  onSearchClicked: PropTypes.func.isRequired
}


