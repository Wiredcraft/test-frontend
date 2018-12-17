import React, { Component } from 'react'
import StateRow from './StateRow';
import { connect } from 'react-redux';

class Table extends Component {

  // optionally render rows based on keywords and searchType
  filter = () => {
    return this.props.data.map(i => {
      switch(this.props.searchType) {
        case 'Last input':
          return i.input.includes(this.props.searchKeyword) && <StateRow key={i.name} stateData={i}/>
        case 'Number of forms':
          return i.forms.includes(this.props.searchKeyword) && <StateRow key={i.name} stateData={i}/>
        case 'Number of voters':
          return i.voters.includes(this.props.searchKeyword) && <StateRow key={i.name} stateData={i}/>
        case 'Updates':
          return i.updates.includes(this.props.searchKeyword) && <StateRow key={i.name} stateData={i}/>
        default:
          return i.name.toUpperCase().includes(this.props.searchKeyword.toUpperCase()) && <StateRow key={i.name} stateData={i}/>
      }
    })
  }

  render() {
    const { searchKeyword, searchType } = this.props
    console.log(searchKeyword, searchType)
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
            {this.filter()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

// searchKeyword is the search text user entered
const mapStatesToProps = state => {
  console.log(state);
  return {
    searchKeyword: state.search.filterText,
    searchType: state.search.filterType
  }
}

export default connect(mapStatesToProps)(Table)