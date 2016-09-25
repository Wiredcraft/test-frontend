import React, { Component, PropTypes } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import classNames from 'classnames'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../../constants/FilterTypes'
import styles from './style.css'


class CollapsableRow extends Component {
  constructor(props) {
    super(props)
    this.toggleClass4State = this.toggleClass4State.bind(this)
    this.toggleClass4District = this.toggleClass4District.bind(this)
  }

  render() {
    const { id, name, lastInput, forms, voters, update, type, actions, stateId, districtId, size, toggle } = this.props

    const classes = classNames({
      'table-row': true,
      'district': type === FILTER_DISTRICT && toggle[stateId],
      'district hide': type === FILTER_DISTRICT && !toggle[stateId],
      'township': type === FILTER_TOWNSHIP && toggle[stateId] && toggle[stateId][districtId],
      'township hide': type === FILTER_TOWNSHIP && (toggle[stateId] === undefined || !toggle[stateId][districtId]),
    })

    return (
      <div className={classes}>
        <div className="table-column region">
          <span className="text">{name}</span>
          {
            // only show collapsed button for STATE & DISTRICT row
            (type === FILTER_STATE || type === FILTER_DISTRICT)
            &&
            <Button bsStyle={null} bsSize="xsmall" className="pull-right btn-collapsed" onClick={() => actions(stateId, id)}>
              <strong>{size}</strong>

              <span className="capital btn-collapsed-text">
                {
                  type === FILTER_STATE ? ` ${FILTER_DISTRICT} ` : ` ${FILTER_TOWNSHIP} `
                }
              </span>

              {(type === FILTER_STATE) && <Glyphicon glyph={classNames(this.toggleClass4State(toggle[stateId]))} />}
              {(type === FILTER_DISTRICT) && <Glyphicon glyph={classNames(this.toggleClass4District(toggle[stateId], id))} />}

            </Button>
          }
        </div>
        <div className="table-column text-center">{lastInput.toLocaleString()}</div>
        <div className="table-column text-center">{forms.toLocaleString()}</div>
        <div className="table-column text-center">{voters.toLocaleString()}</div>
        <div className="table-column text-center">{update.toLocaleString()}</div>
      </div>
    )
  }

  toggleClass4State(status) {
    if (!status) {
      return {
        'plus': true,
        'minus': false
      }
    } else if (status || typeof(status) !== 'boolean') {
      return {
        'plus': false,
        'minus': true
      }
    }
  }

  toggleClass4District(status, id) {
    if (status === true || typeof(status) === 'object' && (!status[id] || status[id] === false)) {
      return {
        'plus': true,
        'minus': false
      }
    } else if (typeof(status) === 'object' && status[id] === true) {
      return {
        'plus': false,
        'minus': true
      }
    }
  }
}

CollapsableRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastInput: PropTypes.number.isRequired,
  forms: PropTypes.number.isRequired,
  voters: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.func
}

export default CollapsableRow
