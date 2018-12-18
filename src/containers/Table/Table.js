import React, { Component } from 'react'
import StateRow from '../Row/StateRow';
import { connect } from 'react-redux';
import Row from '../Row/Row';
import styles from './Table.module.scss';

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
    const tableAttributes = {
      name: 'Region', 
      input: 'Last input', 
      forms: 'Number of forms',
      voters: 'Number of voters',
      updates: 'Updates'
    }
    return (
      <React.Fragment>
        <table className={styles.container}>
          <thead>
            <Row data={tableAttributes}/>
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