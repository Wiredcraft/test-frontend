React = require "react"
FilterActions = require "../actions/FilterActions.cjsx"
SearchActions = require "../actions/SearchActions.cjsx"

TableControl = React.createClass

  handleSelect: (event) ->
    filter = event.target.value
    FilterActions.changeFilter filter

  handleInput: (event) ->
    @setState
      keywords: event.target.value

  handleSearch: (event) ->
    SearchActions.searchKeywords @state.keywords

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
            <input type="text" className="form-control" placeholder="Search" onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <button onClick={this.handleSearch}> search </button>
          </div>          
        </div>
      </div>

module.exports = TableControl 