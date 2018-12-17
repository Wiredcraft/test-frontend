import React, { Component } from 'react'
import Dropdown from './Dropdown/Dropdown'

// dropdown options
const options = ['Region', 'Last input', 'Number of forms', 'Number of voters', 'Updates'];

class TableFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterType: '',
    }
  }

  onTypeChangeHandler = (i) => {
    this.setState({filterType: options[i]})
    console.log(options[i])
  }

  render() {

    return (
      <div>
        <Dropdown title={this.state.filterType} options={options} onTypeChange={this.onTypeChangeHandler} />
      </div>
    )
  }
}

export default TableFilter