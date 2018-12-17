import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
          onClick={() => {this.props.onTypeChange(i); this.setState({active: false})}} 
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
      <div className="dropdown">
        <div
          onClick={() => this.toggleDropdown()}
        >
          {this.props.title !== '' ? this.props.title : 'Filter'}
        </div>
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
