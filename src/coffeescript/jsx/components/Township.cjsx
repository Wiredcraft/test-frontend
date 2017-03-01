React = require "react"
classNames = require "classnames"

Township = React.createClass

  getInitialState: ->
    {}

  render: ->
    township = @props.township
    tClassNames = classNames "table-row", {hidden: @props.hidden}
  
    return <div className={tClassNames}>
          <div className="table-cell">
            <div className="item-title item-township">
              <span className="icon icon-tag icon-prepend"> T </span>
              {township.title}
              <span className="icon icon-download icon-append"> </span>
            </div>
          </div>
          <div className="table-cell"> {township.last_inpot} </div>
          <div className="table-cell"> {township.form_num} </div>
          <div className="table-cell"> {township.voter_num} </div>
          <div className="table-cell"> {township.update} </div>
        </div>

module.exports = Township 