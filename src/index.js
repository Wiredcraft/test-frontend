import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import Store from './store'

import './styles/global.css'

const store = new Store()
store.createRandomRegions()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
