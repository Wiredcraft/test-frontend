import './matchMedia.js'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import ImageList from '../components/ImageList'
import { Provider } from 'react-redux'
import { imageListStore } from '../store/store'
import { getImages } from '../utils/fetchData'
import data from '../mock/dataArr.json'
afterEach(cleanup)
jest.mock('../utils/fetchData')
const mockGetImages = getImages as jest.MockedFunction<typeof getImages>
test('renders masonry layout container and columns', () => {
    render(
        <Provider store={imageListStore}>
            <ImageList />
        </Provider>
    )
    const masonryLayoutContainer = screen.getByTestId(
        'masonry-layout-container'
    )
    expect(masonryLayoutContainer).toBeInTheDocument()
    const masonryColumn = screen.getAllByTestId('masonry-column')
    expect(masonryColumn).toHaveLength(6)
})
test('image list empty', () => {
    render(
        <Provider store={imageListStore}>
            <ImageList />
        </Provider>
    )
    const imageContainers = screen.queryAllByTestId('image-container')
    expect(imageContainers).toHaveLength(0)
})

test('get 30 images', async () => {
    const images = data.slice(0, 30)
    mockGetImages.mockResolvedValueOnce(images)
    render(
        <Provider store={imageListStore}>
            <ImageList />
        </Provider>
    )
    const loadingText = screen.getByText('Loading more images...')
    expect(loadingText).toBeInTheDocument()
    expect(mockGetImages).toHaveBeenCalledTimes(1)
    await waitFor(() => {
        const imageContainers = screen.queryAllByTestId('image-container')
        expect(imageContainers).toHaveLength(30)
    })
})
