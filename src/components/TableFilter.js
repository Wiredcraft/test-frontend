import React, { Component } from 'react'
import Dropdown from './Dropdown/Dropdown'
import Search from './Search';
import styles from './TableFilter.module.scss'
import { connect } from 'react-redux';
import { onInputChange } from '../store/actions/inputAction'

// dropdown options
const options = ['Region', 'Last input', 'Number of forms', 'Number of voters', 'Updates'];

class TableFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterType: '',
      searchText: ''
    }
  }

  onTypeChangeHandler = (i) => {
    this.setState({filterType: options[i]})
    console.log(options[i])
  }
  onSearchChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({searchText: e.target.value})
  }

  render() {

    return (
      <div>
        <div className={styles.DropdownBox}>
          <Dropdown  title={this.state.filterType} options={options} onFilterChange={this.onTypeChangeHandler} />
        </div>
        <div className={styles.SearchBox}>
          <Search onSearchChange={this.props.onInputChange}/>
        </div>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (e) => dispatch(onInputChange(e.target.value))
  }
}

export default connect(null, mapDispatchToProps)(TableFilter)