import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../constants/FilterTypes'
import {FETCH_REGION, TOGGLE_DISTRICT, TOGGLE_TOWNSHIP} from '../constants/ActionTypes'

const initialState = {
  status: 'PENDING',
  toggle: {},
  records: []
}

export default function regions(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DISTRICT:
      const id = action.payload.id

      const toggleDistrictLevel = {...state.toggle, ...{[id]: !state.toggle[id]}}

      return {...state, toggle: toggleDistrictLevel }

    case TOGGLE_TOWNSHIP:
      const stateId = action.payload.stateId
      const districtId = action.payload.districtId

      const toggle = Object.assign({}, state.toggle)
      let districtLevel = toggle[stateId]

      if (districtLevel === true) {
        districtLevel = {
          [districtId]: true
        }
      } else {
        districtLevel[districtId] = !districtLevel[districtId]
      }

      toggle[stateId] = districtLevel

      return {...state, toggle}

    case FETCH_REGION:
      let toggleObj = {}

      if (action.payload.filter === FILTER_DISTRICT) {
        toggleObj = toggleAll(action.payload.records, true, false) 
      } else if (action.payload.filter === FILTER_TOWNSHIP) {
        toggleObj = toggleAll(action.payload.records, true, true)
      }

      return {...state, ...action.payload, ...{toggle: toggleObj}}

    default:
      return state
  }
}

function toggleAll(regions, toggleDistrict=false, toggleTownship=false) {
  const toggleObj = {}

  regions.forEach(state => {
    const districts = state.districts

    if (toggleTownship) {
      districts.forEach(district => {
        if (toggleObj[state.id]) {
          toggleObj[state.id][district.id] = true
        } else {
          toggleObj[state.id] = {
            [district.id]: true
          }
        }
      })
    } else if (toggleDistrict) {
      districts.forEach(district => {
        toggleObj[state.id] = true
      })
    }
  })

  return toggleObj
}
