import React, { Component } from 'react'
import StateRow from '../../components/Row/StateRow';
import { connect } from 'react-redux';
import Row from '../../components/Row/Row';
import styles from './Table.module.scss';

class Table extends Component {

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
            {this.props.rowData.map(i => <StateRow key={i.name} stateData={i}/>)}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStatesToProps = ({ data }) => {
  return {
    rowData: data
  }
}

export default connect(mapStatesToProps)(Table)