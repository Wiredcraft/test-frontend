import fetch from 'isomorphic-fetch'
import * as ACTION from '../constants/ActionTypes'
import {PENDING, SUCCESS, FAILED} from '../constants/StatusTypes'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../constants/FilterTypes'
import * as API from '../constants/Api'

export function toggleDistrict(id) {
  return {
    type: ACTION.TOGGLE_DISTRICT,
    payload: {
      id
    }
  }
}

export function toggleTownship(stateId, districtId) {
  return {
    type: ACTION.TOGGLE_TOWNSHIP,
    payload: {
      stateId,
      districtId
    }
  }
}

export function fetchRegions(filterType, keyword) {
  const API_URL = (() => {
    switch(filterType) {
      case FILTER_STATE:
        return `${API.GET_REGION}?${FILTER_STATE}=${keyword}`
      case FILTER_DISTRICT:
        return `${API.GET_REGION}?${FILTER_DISTRICT}=${keyword}`
      case FILTER_TOWNSHIP:
        return `${API.GET_REGION}?${FILTER_TOWNSHIP}=${keyword}`
      default:
        return API.GET_REGION
    }
  })()

  return dispatch => {
    // pending
    dispatch(fetchRegionsRequest());

    // fetching
    return fetch(API_URL).then(res => {
      return res.json()
    }).then(json => {
      // success
      dispatch(fetchRegionsSuccess(json, filterType))
    // failed
    }).catch(error => {
      console.error(error);
      dispatch(fetchRegionsFailure(error))
    })
  }
}

function fetchRegionsRequest() {
  return {
    type: ACTION.FETCH_REGION,
    payload: {
      status: PENDING,
      records: []
    }
  }
}

function fetchRegionsSuccess(data, filterType) {
  return {
    type: ACTION.FETCH_REGION,
    payload: {
      status: SUCCESS,
      records: data,
      filter: filterType
    }
  }
}

function fetchRegionsFailure(error) {
  return {
    type: ACTION.FETCH_REGION,
    payload: {
      status: FAILED,
      records: [],
      error
    }
  }
}

