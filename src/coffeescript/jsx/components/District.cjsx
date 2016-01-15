React = require "react"
Township = require "./Township.cjsx"

District = React.createClass

  getInitialState: ->
    {}

  render: ->
    district = @props.district

    if district.sub_records and district.sub_records.length > 0
      township_num = district.sub_records.length
      townships = district.sub_records.map (t)=>
        return <Township key={t.id} township={t} />

      return <div>
          <div className="table-row">
            <div className="table-cell">
              <div className="item-title item-district">
                <span className="icon icon-tag icon-prepend"> D </span>
                {district.title} 
                <div className="subitem-toggle">
                  <span> {township_num} </span>
                  Townships
                </div>
              </div>             
            </div>
            <div className="table-cell"> {district.last_inpot} </div>
            <div className="table-cell"> {district.form_num} </div>
            <div className="table-cell"> {district.voter_num} </div>
            <div className="table-cell"> {district.update} </div>
          </div>
          {townships}
        </div>

    else  
      return <div className="table-row">
            <div className="table-cell">
              <div className="item-title item-district">
                <span className="icon icon-tag icon-prepend"> D </span>
                {district.title} 
              </div>  
            </div>
            <div className="table-cell"> {district.last_inpot} </div>
            <div className="table-cell"> {district.form_num} </div>
            <div className="table-cell"> {district.voter_num} </div>
            <div className="table-cell"> {district.update} </div>
          </div>

module.exports = District          