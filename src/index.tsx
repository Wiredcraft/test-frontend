import React from 'react'
import ReactDOM from 'react-dom'
import {createGlobalStyle} from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    line-height: 1.15;
  }
`

const root = document.createElement('div')
root.id = 'App'
document.body.appendChild(root)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  root
)
