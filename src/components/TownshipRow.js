import React from 'react'
import Row from './Row';

export default function TownshipRow(props) {
  return (
    <Row type={props.townshipData.townshipName} />
  )
}
