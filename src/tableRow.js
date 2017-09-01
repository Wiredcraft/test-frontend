import React, { Component } from 'react';


class TableRow extends Component {
  constructor(props){
    super(props);
    this.state ={
      childVisible : false
    };
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  // control sub node can show or hidden
  toggleVisible (){
    this.setState({childVisible : !this.state.childVisible});
  }

  sortByType(type){
      this.props.regionState.childRegions.sort((a , b) => {
              var index = "lastInput numberOfForms numberOfVotes update name".indexOf(type);
              if(index !== -1 ) {
                  if(index === 45 ) return a[type].toString().localeCompare(b[type].toString()); else  return b[type] - a[type];
              }
              return 0;
          }
      )
  }
  containSearch (searchValue){
    return this.props.regionState.name.toLowerCase().indexOf(searchValue) > -1 ||
            this.props.regionState.lastInput.toString().toLowerCase().indexOf(searchValue) > -1 ||
              this.props.regionState.numberOfForms.toString().toLowerCase().indexOf(searchValue) > -1 ||
                this.props.regionState.numberOfVotes.toString().toLowerCase().indexOf(searchValue) > -1 ||
                 this.props.regionState.update.toString().toLowerCase().indexOf(searchValue) > -1;
  }
  render() {
    let regionState = this.props.regionState;
    let subChild = "" ;
    let subChildLength = regionState.childRegions? regionState.childRegions.length : 0;
    let searchValue = this.props.searchValue;
    let visible = searchValue !== ""? this.containSearch(searchValue.toLowerCase()) :this.props.childVisible ;


    if( subChildLength > 0 ) {
        this.props.filterType!== "" && subChildLength > 1 ? this.sortByType(this.props.filterType) : "";
        subChild = regionState.childRegions.map((nextRegionState) => {
            return (<TableRow regionState={nextRegionState} searchValue={this.props.searchValue}
                              childVisible={this.state.childVisible && visible}/>)
        });
    }

    return (
      <div className = "tableRow">
        <ul className = { visible ? "" : "hidden"}>
          <li className = {"tableFirst" + " "+ regionState.regionClass}>
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
        {subChild}
      </div>
    )
  }
}

export default TableRow;
