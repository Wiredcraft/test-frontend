import React from 'react'
import styles from './Search.module.scss';

export default function Search(props) {
  return (
    <React.Fragment>
      <input type='text' className={styles.input} placeholder='Search' onChange={props.onSearchChange}/>
    </React.Fragment>
  )
}


