import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders search bar', () => {
    render(<App />)
    const linkElement = screen.getByAltText('Search')
    expect(linkElement).toBeInTheDocument()
})
