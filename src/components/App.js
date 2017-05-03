import React, {Component} from 'react'
import {observer} from 'mobx-react'

import Header from './Header'
import Table from './Table'
import Filter from './Filter'

@observer class App extends Component {
  render () {
    const {store} = this.props
    return (
      <div>
        <Header />
        <Filter store={store} />
        <Table store={store} />
      </div>
    )
  }
}

export default App
