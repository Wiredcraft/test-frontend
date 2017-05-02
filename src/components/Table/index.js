import React from 'react'
import {observer} from 'mobx-react'

import styles from './index.css'

import TableHeader from './Header'
import Row from './Row'

@observer class Table extends React.Component {
  render () {
    const regions = this.props.store.filteredRegions

    const attrs = [
      {
        name: 'Region',
        attr: 'name'
      },
      {
        name: 'Last input',
        attr: 'lastInput'
      },
      {
        name: 'Number of forms',
        attr: 'numberOfForms'
      },
      {
        name: 'Number of Voters',
        attr: 'numberOfVoters'
      },
      {
        name: 'Update',
        attr: 'update'
      }
    ]

    return (
      <table className={styles.table}>
        <TableHeader items={attrs} />
        {regions.map(region => (
          <Row key={region.id} item={region} attrs={attrs} />
        ))}
      </table>
    )
  }
}

export default Table
