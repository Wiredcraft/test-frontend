/**
 * NavBar component test
 * Thu Jul 23 10:39:11 2020
 * by xiaoT
 */
import React, { FC } from 'react'
import ReactDom from 'react-dom'
import { shallow, mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { getByLabelText, fireEvent } from '@testing-library/react'

import mountWithProvider from '@Store/mockStore'
import NavBar from './'

describe('NavBar Test', () => {
  let navBar: any
  const submitFn: () => void = jest.fn()
  // const ConnectedNavBar = connect()(NavBar)
  beforeEach(() => {
    navBar  = mountWithProvider(<NavBar onSearch={submitFn} />)()
  })
  afterEach(() => {
    navBar.unmount()
  })
  // should be match the snapshot
  it('should be match the snapshot', () => {
    expect(navBar.html()).toMatchSnapshot()
  })
  // NavBar should be have an avatar icon
  it('should be have an avatar icon', () => {
    const avatar = navBar.find('.icon-avatar')

    expect(avatar.length).toEqual(1)
  })
  // NavBar should be have a bell icon
  it('should be have a bell icon', () => {
    const bell = navBar.find('.icon-bell')

    expect(bell.length).toEqual(1)
  })
  // NavBar should be have a home icon
  it('should be have a home icon', () => {
    const home = navBar.find('.icon-home')

    expect(home.length).toEqual(1)
  })
  // NavBar should be have a form
  it('should be have a form', () => {
    const formEle = navBar.find('form')

    expect(formEle.length).toEqual(1)
  })
  // NavBar should be have a input
  it('should be have a input', () => {
    const inputEle = navBar.find('input')

    expect(inputEle.length).toEqual(1)
  })
  // NavBar should be have a search icon
  it('should be have a search icon', () => {
    const search = navBar.find('.icon-search')

    expect(search.length).toEqual(1)
  })
  // test form submit event
  it('form onSubmit should be called', () => {
    const formEle = navBar.find('form')
    formEle.simulate('submit')
    expect(submitFn).toHaveBeenCalled()
  })
})

