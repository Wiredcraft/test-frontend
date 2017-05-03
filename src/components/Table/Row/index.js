import React from 'react'

import {observer} from 'mobx-react'

import styles from './index.css'

@observer class Row extends React.Component {
  constructor () {
    super()
    this.state = {
      showCity: false,
      showCounty: {}
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }
  render () {
    const {item, attrs} = this.props
    const Row = ({item, attrs, type}) => {
      return (
        <tr>
          {attrs.map(attr => {
            if (attr.name === 'Region') {
              const Button = (name, state) => (
                <button
                  className={styles.toggleButton}
                  onClick={() => this.handleToggleClick(type, item)}
                >
                  <span>{name}</span>
                  <span
                    className={`${styles.toggleButtonIcon} ${state ? 'icon-minus' : 'icon-plus'}`}
                  />
                </button>
              )

              let ToggleButton
              if (item.cities)
                ToggleButton = Button(
                  `${item.cities.length} Districts`,
                  this.state.showCity
                )
              if (item.counties)
                ToggleButton = Button(
                  `${item.counties.length} Townships`,
                  this.state.showCounty[item.id]
                )

              return (
                <td
                  className={`${styles.cell} ${styles.region}`}
                  key={attr.attr}
                >
                  <span>
                    <span
                      className={`${styles.regionBanner} ${styles[`${type}RegionBanner`]}`}
                    >
                      {type === 'province' ? 'S' : type === 'city' ? 'D' : 'T'}
                    </span>
                    <span>{item[attr.attr]}</span>
                    <span className={styles.downloadIconContainer}>
                      <span className='icon-download' />
                    </span>
                  </span>
                  {ToggleButton}
                </td>
              )
            } else {
              return (
                <td className={styles.cell} key={attr.attr}>
                  {item[attr.attr].toLocaleString()}
                </td>
              )
            }
          })}
        </tr>
      )
    }

    const MultiRow = [
      <Row key={item.id} item={item} attrs={attrs} type={item.type} />
    ]

    if (item.cities && this.state.showCity) {
      item.cities.forEach(city => {
        MultiRow.push(
          <Row key={city.id} item={city} attrs={attrs} type={city.type} />
        )
        if (city.counties && this.state.showCounty[city.id]) {
          city.counties.forEach(county => {
            MultiRow.push(
              <Row
                key={county.id}
                item={county}
                attrs={attrs}
                type={county.type}
              />
            )
          })
        }
      })
    }
    if (item.counties && this.state.showCounty[item.id]) {
      item.counties.forEach(county => {
        MultiRow.push(
          <Row key={county.id} item={county} attrs={attrs} type={county.type} />
        )
      })
    }
    return (
      <tbody>
        {MultiRow}
      </tbody>
    )
  }
  handleToggleClick (type, item) {
    if (type === 'province') {
      this.setState(prevState => ({
        showCity: !prevState.showCity
      }))
    }
    if (type === 'city') {
      this.setState(prevState => ({
        showCounty: {
          [item.id]: !prevState.showCounty[item.id]
        }
      }))
    }
  }
}

export default Row
