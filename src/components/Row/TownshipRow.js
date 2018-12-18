import React from 'react'
import Row from './Row';
import PropTypes from 'prop-types'


function TownshipRow(props) {
  return (
    <Row type='T' data={props.townshipData} />
  )
}

TownshipRow.propTypes = {
	townshipData: PropTypes.object.isRequired
}

export default TownshipRow

