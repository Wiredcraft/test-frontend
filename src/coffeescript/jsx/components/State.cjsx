React = require "react"
District = require "./District.cjsx"

State = React.createClass

  getInitialState: ->
    {}

  render: ->
    state = @props.state

    if state.sub_records and state.sub_records.length > 0
      district_num = state.sub_records.length
      districts = state.sub_records.map (d)=>
        return <District key={d.id} district={d} />

      return <div>
          <div className="table-row">
            <div className="table-cell">
              <div className="item-title">
                <span className="icon icon-tag icon-prepend"> S </span>
                {state.title} 
                <div className="subitem-toggle">
                  <span> {district_num} </span>
                  Districts
                </div>
              </div>
            </div>
            <div className="table-cell"> {state.last_inpot} </div>
            <div className="table-cell"> {state.form_num} </div>
            <div className="table-cell"> {state.voter_num} </div>
            <div className="table-cell"> {state.update} </div>
          </div>
          {districts}
        </div>

    else  
      return <div className="table-row">
            <div className="table-cell"> 
              <div className="item-title">
                <span className="icon icon-tag icon-prepend"> S </span>
                {state.title} 
              </div> 
            </div>
            <div className="table-cell"> {state.last_inpot} </div>
            <div className="table-cell"> {state.form_num} </div>
            <div className="table-cell"> {state.voter_num} </div>
            <div className="table-cell"> {state.update} </div>
          </div>

module.exports = State
