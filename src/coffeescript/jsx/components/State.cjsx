React = require "react"
District = require "./District.cjsx"
classNames = require "classnames"

State = React.createClass

  getInitialState: ->
    {expanded: false}

  componentWillReceiveProps: (nextProps) ->
    if @props.displayLevel isnt nextProps.displayLevel
      @setState
        expanded: false

  handleClick: (event) ->
    status = not @state.expanded
    @setState
      expanded: status   

  render: ->
    state = @props.state
    displayLevel = @props.displayLevel
    districtHidden = do =>
      switch displayLevel
        when "State"
          !@state.expanded
        when "District"
          false
        when "Township"
          true
        else
          !@state.expanded

    stateClass = classNames "table-row", {hidden: displayLevel is "District" or displayLevel is "Township"}
    toggleClass = classNames "subitem-toggle", {expanded: @state.expanded, collapsed: !@state.expanded}

    if state.sub_records and state.sub_records.length > 0
      district_num = state.sub_records.length
      districts = state.sub_records.map (d)=>
        return <District key={d.id} district={d} hidden={districtHidden} displayLevel={displayLevel} parentExpanded={@state.expanded} />

      return <div>
          <div className={stateClass}>
            <div className="table-cell">
              <div className="item-title">
                <span className="icon icon-tag icon-prepend"> S </span>
                {state.title} 
                <div className={toggleClass} onClick={@handleClick}>
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
      return <div className={stateClass}>
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
