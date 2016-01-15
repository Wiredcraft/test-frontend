React = require "react"
TableControl = require "./TableControl.cjsx"
State = require "./State.cjsx"
AppStore = require "../stores/AppStore.cjsx"
# dataAPI = require "../../utils/dataAPI.coffee"

ReportsTable = React.createClass

  getInitialState: ->
    {states: AppStore.getDataList(), level: "State"}

  componentDidMount: ->
    AppStore.addChangeListener @handleChange

  componentWillUnmount: ->
    AppStore.removeChangeListener @handleChange

  handleChange: ->
    @setState 
      states: AppStore.getProductList()
      level: AppStore.getSelectedFilter()

  render: ->
    tabelClass = "table " + @state.level
    states = @state.states.map (s) =>
      <State key={s.id} state={s} />

    return <div className={tabelClass}>
        <TableControl />
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