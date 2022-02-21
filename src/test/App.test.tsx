import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import { imageListStore } from '../store/store'

afterEach(cleanup)
test('renders top nav correctly', () => {
    render(
        <Provider store={imageListStore}>
            <App />
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

test('renders loading correctly', () => {
    render(
        <Provider store={imageListStore}>
            <App />
        </Provider>
    )
    const loading = screen.getByText('Loading more images...')
    expect(loading).toBeInTheDocument()
})

test('renders masonry layout container and columns', async () => {
    render(
        <Provider store={imageListStore}>
            <App />
        </Provider>
    )
    const masonryLayoutContainer = screen.getByTestId(
        'masonry-layout-container'
    )
    expect(masonryLayoutContainer).toBeInTheDocument()
    const masonryColumn = screen.getAllByTestId('masonry-column')
    expect(masonryColumn).toHaveLength(6)
})
