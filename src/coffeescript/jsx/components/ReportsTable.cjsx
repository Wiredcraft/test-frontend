React = require "react"
State = require "./State.cjsx"
dataAPI = require "../../utils/dataAPI.coffee"

ReportsTable = React.createClass

  getInitialState: ->
    {states: dataAPI.getAllRecords()}

  render: ->

    states = @state.states.map (s) =>
      <State key={s.id} state={s} />

    return <div className="table">
        <div className="table-heading">
          <div className="table-heading-cell"> Regions </div>
          <div className="table-heading-cell"> Last inpot </div>
          <div className="table-heading-cell"> Number of forms </div>
          <div className="table-heading-cell"> Number of Voters </div>
          <div className="table-heading-cell"> Update </div>
        </div>
        {states}
      </div>

module.exports = ReportsTable