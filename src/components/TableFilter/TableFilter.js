import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Search from '../Search';
import styles from './TableFilter.module.scss'
import { connect } from 'react-redux';
import { onSearchBtnClicked } from '../../store/actions/filterAction'

// dropdown options
const options = ['Region', 'Last input', 'Number of forms', 'Number of voters', 'Updates'];

class TableFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterType: '',
      filterText: ''
    }
  }

  onTypeChangeHandler = (i) => {
    this.setState({filterType: options[i]})
    console.log(options[i])
  }
  onSearchChangeHandler = (e) => {
    this.setState({filterText: e.target.value})
  }

  
  render() {
    console.log(this.state.filterText)

    return (
      <div className={styles.container}>
        <div className={styles.DropdownBox}>
          <Dropdown  title={this.state.filterType} options={options} onFilterChange={this.onTypeChangeHandler} />
        </div>
        <div className={styles.SearchBox}>
          <Search onSearchChange={this.onSearchChangeHandler} onSearchClicked={() => this.props.onSearchBtnClicked(this.state)}/>
        </div>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // this triggers update redux state of the filterText
    onSearchBtnClicked: (value) => dispatch(onSearchBtnClicked(value))
  }
}

export default connect(null, mapDispatchToProps)(TableFilter)