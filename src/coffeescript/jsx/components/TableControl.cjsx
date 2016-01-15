React = require "react"
# AppStore = require "../stores/AppStore.cjsx"
FilterActions = require "../actions/FilterActions.cjsx"
SearchActions = require "../actions/SearchActions.cjsx"

TableControl = React.createClass

  getInitialState: ->
    {}

  handleSelect: (event) ->
    filter = event.target.value
    console.log filter
    FilterActions.changeFilter filter

  render: ->
  
    return <div className="table-control">
        <div className="form-inline">
          <div className="form-group">
            <select className="form-control" onChange={this.handleSelect} defaultValue="State">
              <option value="State"> State </option>
              <option value="District"> District </option>
              <option value="Township"> Township </option>

            </select>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <div className="form-group">
            <button> search </button>
          </div>          
        </div>
      </div>

module.exports = TableControl 