import React, { Component, PropTypes } from 'react'
import { Glyphicon, DropdownButton, MenuItem, Button, FormGroup, InputGroup, FormControl  } from 'react-bootstrap'
import styles from './style.css'

class TableFilter extends Component {
  constructor(props) {
    super(props)
    this.handlePressEnter = this.handlePressEnter.bind(this)
  }

  render() {
    const { filters, activeIndex, actions }  = this.props

    const filtersType = filters.type

    const menuItems = filtersType.map((filter, index) => {
      return (
        <MenuItem key={index} eventKey={index} active={index === activeIndex}>{filter}</MenuItem>
      )
    })

    return (
      <div className="wirecraft-filter-bar container">
        <FormGroup bsSize="large">
          <InputGroup>
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              bsSize="large"
              title={filtersType[activeIndex]}
              style={{borderRadius: 0}}
              onSelect={actions.setFilter}
            >
              {menuItems}
            </DropdownButton>
            <FormControl type="text" placeholder="Search..." onKeyPress={this.handlePressEnter} />
            <FormControl.Feedback>
              <Glyphicon glyph="search" />
            </FormControl.Feedback>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }

  handlePressEnter(event) {
    if (event.charCode === 13) {
      const { filters, activeIndex, actions }  = this.props
      const keyword = event.target.value

      actions.fetchRegions(filters.type[activeIndex], keyword)
    }
  }
}

TableFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  activeIndex: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default TableFilter
