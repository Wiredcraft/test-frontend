import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './tableRow.js'
import {RegionStates} from './data.js'


class MyTable extends React.Component {
    constructor (){
        super();
        this.state = {
            regionStates : RegionStates,
            searchValue : "",
            filterContent : "",
            filterType : "",
            filterVisible : false
        };
        this.filterToggle = this.filterToggle.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }

    filterToggle (){
        this.setState({filterVisible: !this.state.filterVisible});
    }

    filterByType( type , name) {
        this.setState({filterContent: name});
        this.setState({filterType: type});
        this.filterToggle();
        this.sortByType(type);
    }

    sortByType(type){
        this.state.regionStates.sort((a , b) => {
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
        )
    }
    searchChange (e){
        this.setState({searchValue: e.target.value});
    }

    render() {
        return(
            <main className ="mainBody">
                <div className ="tableFilter">
                    <div id = "filter" onClick={this.filterToggle}>
                        <div id = "filterContent">{this.state.filterContent!=="" ? this.state.filterContent : "Filter"}</div>
                        <ul className={this.state.filterVisible ? "" : "hidden"}>
                            <li onClick={this.filterByType.bind(this, 'name', 'Region')}>Region</li>
                            <li onClick={this.filterByType.bind(this, 'lastInput', 'Last input')}>Last input</li>
                            <li onClick={this.filterByType.bind(this, 'numberOfForms', 'Number of forms')}>Number of forms</li>
                            <li onClick={this.filterByType.bind(this, 'numberOfVotes', 'Number of voters')}>Number of Voters</li>
                            <li onClick={this.filterByType.bind(this, 'update', 'Update')}>Update</li>
                        </ul>
                    </div>
                    <div id = "search">
                      <input type="text" className = "searchInput" placeholder= "Search" onChange = {this.searchChange}/>
                    </div>
                </div>
                <div className ="table">
                    <ul className="tableHeader">
                        <li className = "tableFirst">Region</li>
                        <li>Last input</li>
                        <li>Number of forms</li>
                        <li>Number of Voters</li>
                        <li>Update</li>
                    </ul>
                    <div>
                        {
                            this.state.regionStates.map((regionState) => {
                            return (
                                <TableRow regionState = {regionState} filterType ={this.state.filterType} searchValue = {this.state.searchValue} childVisible = {true}/>
                            )
                        })}
                    </div>
                </div>
            </main>
    )
    }
}

ReactDOM.render(
  <MyTable/>,
  document.getElementById('mainBody')
);
