import React from 'react'
import PropTypes from 'prop-types'
import styles from './Row.module.scss'
import Region from './Region/Region';


export default function Row(props) {
  const {name, input, forms, voters, updates} = props.data
  return (
    <tr className={styles.row}>
      <td>
        <Region name={name} type={props.type}/>
        {props.children}
      </td>
      <td>{input}</td>
      <td>{forms}</td>
      <td>{voters}</td>
      <td>{updates}</td>
    </tr>
    
  )
}

Row.propTypes = {
  data: PropTypes.object.isRequired
}