React = require "react"
FilterActions = require "../actions/FilterActions.cjsx"
SearchActions = require "../actions/SearchActions.cjsx"
timeout = null

TableControl = React.createClass

  handleSelect: (event) ->
    filter = event.target.value
    FilterActions.changeFilter filter

  handleInput: (event) ->
    @setState
      keywords: event.target.value

    clearTimeout timeout
    timeout = setTimeout () ->
      SearchActions.searchKeywords event.target.value
    , 1500

  handleSearch: (event) ->
    SearchActions.searchKeywords @state.keywords

  render: ->
  
    return <div className="table-control">
        <div className="form-inline">
          <div className="form-group">
            <div className="select-arrow">
              <select className="form-control" onChange={this.handleSelect} defaultValue="State">
                <option value="State"> State </option>
                <option value="District"> District </option>
                <option value="Township"> Township </option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <a href="#" className="button" onClick={this.handleSearch}>
              <span className="icon icon-search"></span>
            </a>
          </div>          
        </div>
      </div>

module.exports = TableControl 