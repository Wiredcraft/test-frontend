import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions/regions'
import { FETCH_REGION } from '../../app/constants/ActionTypes'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../../app/constants/FilterTypes'
import * as API from '../../app/constants/Api'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_REGION when fetching regions has been done', () => {
    nock(API.BASE_URL)
      .get('/region')
      .reply(200, [{name: 'state'}])

    const expectedActions = [
      { 
        type: FETCH_REGION, 
        payload: { 
          status: 'PENDING', 
          records: [],
        } 
      },
      { 
        type: FETCH_REGION, 
        payload: { 
          status: 'SUCCESS', 
          records: [{name: 'state'}],
          filter: FILTER_STATE
        } 
      }
    ]

    const store = mockStore({ records: [] })

    return store.dispatch(actions.fetchRegions())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
