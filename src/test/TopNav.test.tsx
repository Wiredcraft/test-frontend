import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { TopNav } from '../components/TopNav'
import { Provider } from 'react-redux'
import { imageListStore } from '../store/store'
afterEach(cleanup)
test('renders top nav correctly', () => {
    render(
        <Provider store={imageListStore}>
            <TopNav />
        </Provider>
    )
    const searchBar = screen.getByAltText('Search')
    expect(searchBar).toBeInTheDocument()
    const homeBtn = screen.getByTestId('home')
    expect(homeBtn).toBeInTheDocument()
    const notificationBtn = screen.getByTestId('notification')
    expect(notificationBtn).toBeInTheDocument()
    const userBtn = screen.getByTestId('user')
    expect(userBtn).toBeInTheDocument()
})
