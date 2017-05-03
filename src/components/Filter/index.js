import React from 'react'
import {observer} from 'mobx-react'
import Dropdown from 'react-dropdown'
import Search from './Search'

import styles from './index.css'

@observer class Filter extends React.Component {
  constructor (props) {
    super(props)
    const {store} = props
    this.store = store
    this.onSelect = this.onSelect.bind(this)
  }
  render () {
    const options = [
      {value: 'province', label: 'States'},
      {value: 'city', label: 'Districts'},
      {value: 'county', label: 'Townships'}
    ]
    return (
      <div className={styles.filter}>
        <Dropdown options={options} onChange={this.onSelect} />
        <Search store={this.store} />
      </div>
    )
  }
  onSelect (item) {
    this.store.changeFilterType(item.value)
  }
}

export default Filter
