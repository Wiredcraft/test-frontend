import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './tableRow.js'
import {RegionStates} from './data.js'
import registerServiceWorker from './registerServiceWorker';


class MyTable extends React.Component {
    constructor (){
        super();
        this.state = {
            regionStates : RegionStates,
            searchValue : ""
        }
        this.searchChange = this.searchChange.bind(this);
    }

    searchChange (e){
        this.setState({searchValue: e.target.value});
    }

    render() {
        return(
            <main className ="mainBody">
                <div className ="tableFilter">
                    <div id = "filter"></div>
                    <div id = "search">
                      <input type="text" className = "searchInput" placeholder= "Search" onChange = {this.searchChange}/>
                    </div>
                </div>
                <div className ="table">
                    <ul>
                        <li className = "tableFirst">Region</li>
                        <li>Last input</li>
                        <li>Number of forms</li>
                        <li>Number of Voters</li>
                        <li>Update</li>
                    </ul>
                    <div>
                    {this.state.regionStates.map((regionState) => {
                        return (
                            <TableRow regionState = {regionState} searchValue = {this.state.searchValue} childVisible = {true}/>
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
registerServiceWorker();
