import React from 'react'
import ReactDOM from 'react-dom'

import AppProvder from './providers/app'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <AppProvder.Provider>
      <App />
    </AppProvder.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
