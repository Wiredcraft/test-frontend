import { createSlice } from '@reduxjs/toolkit'
import { ImageData } from '../components/ImageContainer'

export const imageListSlice = createSlice({
    name: 'imageList',
    initialState: {
        list: Array<ImageData>(0),
        page: 1,
        limit: 30,
        total: 100,
        search: ''
    },
    reducers: {
        nextPage: (state) => {
            state.page += 1
        },
        prevPage: (state) => {
            if (state.page > 1) {
                state.page -= 1
            }
        },
        addImage: (state, action) => {
            const list = state.list
            state.list = list.concat(action.payload)
        },
        changeSearch: (state, action) => {
            state.search = action.payload
        },
        clearImage: (state) => {
            state.list = []
            state.page = 1
        }
    }
})

export const { nextPage, prevPage, addImage, changeSearch, clearImage } =
    imageListSlice.actions
export default imageListSlice.reducer
