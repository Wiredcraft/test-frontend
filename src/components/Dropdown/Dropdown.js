import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Dropdown.module.scss'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  
  toggleDropdown = () => {
    this.setState({
      active: !this.state.active
    });
  }
  
  // render dropdown options: filter types
  renderOptions = () => {
    if (!this.props.options || !this.state.active)  {
      return;
    }
    
    return this.props.options.map((option, i) => {   
      return (
        <li 
          onClick={() => {this.props.onFilterChange(i); this.setState({active: false})}} 
          key={i} 
          // className={"dropdown__list-item " + (i === this.state.selected ? 'dropdown__list-item--active' : '')}
        >
          {option}
        </li>
      );  
    });  
  }
  
  render() {
    // dropdown div
    return (
      <div className={styles.Dropdown}>
        <div
          onClick={() => this.toggleDropdown()}
        >
          {this.props.title !== '' ? this.props.title : 'Filter'}
        </div>
        <i onClick={() => this.toggleDropdown()} className="fas fa-caret-down"></i>
        <ul>{this.renderOptions()}</ul>      
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array 
};

export default Dropdown
