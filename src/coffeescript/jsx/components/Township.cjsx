React = require "react"

Township = React.createClass

  getInitialState: ->
    {}

  render: ->
    township = @props.township
  
    return <div className="table-row">
          <div className="table-cell">
            <div className="item-title item-township">
              <span className="icon icon-tag icon-prepend"> T </span>
              {township.title}
            </div>
          </div>
          <div className="table-cell"> {township.last_inpot} </div>
          <div className="table-cell"> {township.form_num} </div>
          <div className="table-cell"> {township.voter_num} </div>
          <div className="table-cell"> {township.update} </div>
        </div>

module.exports = Township 