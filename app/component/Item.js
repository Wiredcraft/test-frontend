import React, { Component } from 'react';
import downloadPic from '../image/download.png';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visible !== null ? this.props.visible : 'false',
      subVisible: this.props.visible !== null ? this.props.visible : 'false',
    }
  } 

  toggle() {
    let visible = !this.state.visible;
    if (!visible) {
      this.setState({ subVisible: visible })
    }
    this.setState({ visible: visible })
  }

  render() {
    let childNodes
    let childLength = this.props.sub.length
    let visible = this.state.visible
    let subVisible = this.state.subVisible

    if (childLength && visible) {
      childNodes = this.props.sub.map(function (item, index) {
        return <Item 
                name={item.name} 
                visible={subVisible} 
                key={index + item.name} 
                sub={item.sub ? item.sub : []} />
      })
    }

    return (
      <div className="table-item clearfix">
        <div>
          <span className="table-itemClass">{this.props.name.slice(0,1)}</span>
          <span className="table-itemName">{this.props.name}</span>
          <img className="download-icon" src={downloadPic} alt="download-icon" />

          {
            childLength > 0 ?
              <span onClick={this.toggle.bind(this)}
                className={this.state.visible ? 'active extend-btn' : 'extend-btn'}>
                {childLength} Disctricts
              </span>
              :
              ''
          }
        </div>
        <div>123,456</div>
        <div>123,456</div>
        <div>123,456</div>
        <div>123,456</div>
        {
          childNodes
        }
      </div>
    )
  }
}

export default Item