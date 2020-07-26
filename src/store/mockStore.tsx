/**
 * mock store
 * Mon Jul 27 00:56:27 2020
 * by xiaot
 */
import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

// mock store
const defaultStore = {}
const mockedStore = configureMockStore()(defaultStore)
const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>)

export default mountWithProvider
