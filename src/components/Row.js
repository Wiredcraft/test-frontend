import React from 'react'
import styles from './Row.module.scss'
import PropTypes from 'prop-types'


export default function Row(props) {
  const {name, input, forms, voters, updates} = props.data
  return (
    <tr>
      <td>
          <span>{name}</span>
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