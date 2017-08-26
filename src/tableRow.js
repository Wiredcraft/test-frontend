import React, { Component } from 'react';


class TableRow extends Component {
  constructor(props){
    super(props);
    this.state ={
      childVisible : false
    };
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible (){
    this.setState({childVisible : !this.state.childVisible});
  }
  sortByType(a ,b){
      let type = this.props.filterType;
      switch (type) {
          case 'lastInput' :
          case 'numberOfForms'  :
          case 'numberOfVotes'  :
          case 'update'  :
              return b[type] - a[type];
          case 'name' :
              return a[type].toString().localeCompare(b[type].toString());
          default :
              return 0;
      }
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
    let subChildLength;
    let subChild = "" ;
    let subChildName;
    let searchValue = this.props.searchValue;
    let visible = searchValue !== ""? this.containSearch(searchValue.toLowerCase()) :this.props.childVisible ;

    switch (regionState.regionClass){
        case 'S':
        subChildLength = regionState.districts? regionState.districts.length :0;
        subChildName = "Disctricts";
        if(subChildLength > 0 ){
          this.props.filterType !== "" && subChildLength > 1 ? regionState.districts.sort(this.sortByType()) : "";
          subChild = regionState.districts.map((nextRegionState) => {
            return (<TableRow regionState = {nextRegionState}  searchValue = {this.props.searchValue} childVisible = {this.state.childVisible&&visible}/>)
          });
        }
      break;
      case 'D':
        subChildLength = regionState.townships? regionState.townships.length :0;
        subChildName = "Townships";
        if( subChildLength > 0 ) {
            this.props.filterType !== "" && subChildLength > 1 ? regionState.townships.sort(this.sortByType()) : "";
            subChild = regionState.townships.map((nextRegionState) => {
                return (<TableRow regionState={nextRegionState} searchValue={this.props.searchValue}
                                  childVisible={this.state.childVisible && visible}/>)
            });
        }
       break;
      case 'T':
        subChildLength = 0;
        subChild = "";
      break;
    }


    return (
      <div className = "tableRow">
        <ul className = {visible? "show" : "hidden"}>
          <li className = "tableFirst">
              <span className = "regionHeader">{regionState.name}</span>
              <span className = "dropDown"/>
              {subChildLength > 0?
                <span className = "regionButton" onClick = {this.toggleVisible}>
                {subChildLength}
                <span className = "buttonContent">{subChildName}</span>
                {this.state.childVisiable? "-" : "+"}
                </span> : ""}
          </li>
          <li>{regionState.lastInput}</li>
          <li>{regionState.numberOfForms}</li>
          <li>{regionState.numberOfVotes}</li>
          <li>{regionState.update}</li>
        </ul>
        {subChild}
      </div>
    )
  }
}

export default TableRow;
