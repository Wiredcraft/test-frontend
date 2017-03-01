var ReactDOM, ReportsTable;

window.React = require("react");

ReactDOM = require("react-dom");

ReportsTable = require("./components/ReportsTable.js");

ReactDOM.render(React.createElement(ReportsTable, null), document.getElementById("app-container"));
