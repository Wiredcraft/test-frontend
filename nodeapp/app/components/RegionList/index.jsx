import React, { Component, PropTypes } from 'react'
import TableHeader from '../TableHeader'
import CollapsableRow from '../CollapsableRow'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../../constants/FilterTypes'

class RegionList extends Component {
  render() {
    const { regions, actions, toggle, filter } = this.props

    return (
      <div className="container">
        <div className="table-light">
          <TableHeader />

          {
            regions.map((state, index) => {
              const districts = state.districts

              return (
                <div key={index}>
                  <CollapsableRow {...state} key={state.id} size={districts.length} type={FILTER_STATE} actions={actions.toggleDistrict} stateId={state.id} toggle={toggle} />
                  {
                    districts.map((district, index) => {

                      return (
                        <div key={index}>
                          <CollapsableRow {...district} key={district.id} size={district.townships.length} type={FILTER_DISTRICT} actions={actions.toggleTownship} stateId={state.id} toggle={toggle} />

                          {
                            district.townships.map((township, index) => {
                              return <CollapsableRow key={township.id} type={FILTER_TOWNSHIP} {...township} stateId={state.id} districtId={district.id} toggle={toggle} />
                            })
                          }
                        </div>
                      )

                    })
                  }

                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

RegionList.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object,
  toggle: PropTypes.object
}

export default RegionList
