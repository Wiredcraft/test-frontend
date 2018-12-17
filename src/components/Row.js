import React from 'react'
import styles from './Row.module.scss'

export default function Row(props) {
  return (
    <tr>
      <td>
          <span>{props.type}</span>
          {props.children}
          
      </td>
      <td>123.4</td>
      <td>123.4</td>
      <td>123.4</td>
      <td>123.4</td>
    </tr>
    
  )
}