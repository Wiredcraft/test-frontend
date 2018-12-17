import React, { Component } from 'react'
import StateRow from './StateRow';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    console.log(this.props.data)
    return (
      <React.Fragment>
        <table style={{width: '80%', margin: 'auto'}}>
          <thead>
            <tr>
              <th>Region</th>
              <th>Last input</th>
              <th>Number of forms</th>
              <th>Number of voters</th>
              <th>Updates</th>
            </tr>
          </thead>
          <tbody>
            {/* list of state-level rows */}
          {this.props.data.map(i =>  <StateRow key={i.name} stateData={i}/>)}
          </tbody>
        </table>
      </React.Fragment>
     
    )
  }
}

// searchKeyword is the search text user entered
const mapStatesToProps = state => {
  console.log(state)
  return {
    searchKeyword: state.searchText
  }
}

export default connect(mapStatesToProps)(Table)