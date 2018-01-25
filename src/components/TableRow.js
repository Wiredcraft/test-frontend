import React, { Component } from "react"

class ToggleButton extends Component {
  render() {
    const { count, level, nested, onClick } = this.props
    if (nested) {
      return (
        <button onClick={onClick}>
          {count + " " + level}
          <span className="plus">+</span>
        </button>
      )
    }
    return (
      <button className={"open"} onClick={onClick}>
        {count + " " + level}
        <span className="plus">-</span>
      </button>
    )
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)

    this.state = { nested: true }
  }
  toggle() {
    this.setState(prevState => ({ nested: !prevState.nested }))
  }
  render() {
    const { name, rows } = this.props
    const renderRowGroup = () => {
      const isDistrictVisible = !this.state.nested
      if (!isDistrictVisible) return null
      if (rows instanceof Array) {
        return rows.map((row, i) => {
          return (
            <div key={i} className="row">
              <div className="name">
                <span className="icon lv-t">{row.Town.slice(0, 1)}</span>
                <span>{row.Town}</span>
              </div>
              <div>{row.lastInput}</div>
              <div>1234</div>
              <div>1234</div>
              <div>1234</div>
            </div>
          )
        })
      }
      return Object.keys(rows).map((key, i) => (
        <TableRow key={key} name={key} rows={rows[key]} />
      ))
    }
    const level = name.split(":")[1] === "s" ? "Districts" : "Townships"
    return (
      <div>
        <div className="row">
          <div className="name">
            <span
              className={"icon" + (level === "Districts" ? " lv-s" : " lv-d")}
            >
              {name.slice(0, 1)}
            </span>
            <span>{name.split(":")[0]}</span>
            <ToggleButton
              count={Object.keys(rows).length}
              level={level}
              nested={this.state.nested}
              onClick={this.toggle}
            />
          </div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
        </div>
        {renderRowGroup()}
      </div>
    )
  }
}

export default TableRow
