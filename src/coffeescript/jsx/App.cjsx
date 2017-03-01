window.React = require "react"
ReactDOM = require "react-dom"
ReportsTable = require "./components/ReportsTable.cjsx"

ReactDOM.render <ReportsTable />, document.getElementById "app-container"