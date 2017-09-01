import React, { Component } from 'react';
import VisibleTableRow from '../containers/VisibleTableRow'


class TableRow extends Component {

    constructor() {
        super();
        this.state = {
            childVisible: false,
        };
        this.toggleVisible = this.toggleVisible.bind(this);
    }

    // control sub node can show or hidden
    toggleVisible (){
        this.setState({childVisible : !this.state.childVisible});
    }

    render() {
        let visible =  this.props.visible !== null ? this.props.visible : false ;
        let regionState = this.props.regionState? this.props.regionState : {};
        let subChildLength = regionState.childRegions? regionState.childRegions.length : 0;


        return (
          <div className = "tableRow">
            <ul className = { visible ? "" : "hidden"}>
              <li className = {"tableFirst " + regionState.regionClass}>
                  <span className = "headerCircle">{regionState.regionClass.charAt(0).toUpperCase()}</span>
                  <span className = "regionHeader">{regionState.name}</span>
                  <span className = "dropDown"/>
                  {subChildLength > 0?
                    <span className = {this.state.childVisible ? "regionButton show" : "regionButton"} onClick = {this.toggleVisible}>
                        <span className="bold"> {subChildLength}</span>
                        <span className = "buttonContent">{regionState.subRegionClass.charAt(0).toUpperCase() + regionState.subRegionClass.slice(1)}</span>
                        <span className="bold"> {this.state.childVisible? "-" : "+"}</span>
                    </span> : ""}
              </li>
              <li>{regionState.lastInput.toLocaleString('en-US')}</li>
              <li>{regionState.numberOfForms.toLocaleString('en-US')}</li>
              <li>{regionState.numberOfVotes.toLocaleString('en-US')}</li>
              <li>{regionState.update.toLocaleString('en-US')}</li>
            </ul>
              {
                  subChildLength > 0 ?
                  <VisibleTableRow regionStates={regionState.childRegions} visible ={this.state.childVisible && visible}/> : ""
              }
          </div>
        )
    }
}



export default TableRow;
