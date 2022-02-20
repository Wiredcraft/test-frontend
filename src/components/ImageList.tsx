import { addImage, clearImage, nextPage } from '../features/imageListSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'
import React, { useEffect, useState } from 'react'
import { ImageContainer } from './ImageContainer'
import MasonryLayout from './MasonryLayout'
import { api } from '../config/api'
import './ImageList.scss'
const getImages = async (url: string) => {
    const fetch = window.fetch
    try {
        const res = await fetch(url)
        return res.json()
    } catch (e) {
        console.error('Request Failed', e)
        alert('Network Error!')
        throw e
    }
}

const debounce = (fn: Function, delay: number, immediate = false) => {
    let timer: number | NodeJS.Timeout | null | undefined = null
    return (args: any) => {
        if (typeof timer === 'number') {
            clearTimeout(timer)
        } else if (immediate) {
            fn.apply(this, args)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const ImageList: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const resultList: Array<JSX.Element> = []
    const list = useAppSelector((state) => state.imageList.list)
    let page = useAppSelector((state) => state.imageList.page)
    const limit = useAppSelector((state) => state.imageList.limit)
    const search = useAppSelector((state) => state.imageList.search)
    const [prevSearch, setPrevSearch] = useState('')
    const [atBottom, setAtBottom] = useState(false)
    const [loading, setLoading] = useState(false)
    let isBottom = false
    const getImage = async (searchString?: string) => {
        // get image from json-server
        setLoading(true)
        setAtBottom(false)
        let url = `${api}images?_page=${page}&_limit=${limit}`
        if (searchString) {
            url += `&_search=${searchString}`
            console.log('Search Params', prevSearch, searchString)
            if (prevSearch !== searchString) {
                dispatch(clearImage())
                // start from 1 if changed
                page = 1
                url = `${api}images?_page=${page}&_limit=${limit}&_search=${searchString}`
            }
        }
        if (!searchString && prevSearch) {
            dispatch(clearImage())
            page = 1
            url = `${api}images?_page=${page}&_limit=${limit}`
        }
        const res = await getImages(url)
        if (res.length < limit) {
            setAtBottom(true)
            isBottom = true
        }
        setLoading(false)
        dispatch(addImage(res))
    }
    const handleScroll = () => {
        // load at bottom
        const bottom =
            Math.ceil(window.scrollY + window.innerHeight) >=
            document.body.offsetHeight - 250
        if (bottom) {
            if (!isBottom) {
                page += 1
                dispatch(nextPage())
                getImage(prevSearch)
            }
        }
    }
    useEffect(() => {
        getImage('')
        // load image when loaded

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            if ((!prevSearch && search) || prevSearch !== search) {
                getImage(search)
            }
            if (prevSearch !== search) {
                setPrevSearch(search)
            }
        }, 500)
        const debouncedScroll = debounce(handleScroll, 100)
        window.addEventListener('scroll', debouncedScroll, {
            passive: true
        })
        return () => {
            window.removeEventListener('scroll', debouncedScroll)
            clearTimeout(timer)
        }
        // only get image after search string update
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, prevSearch])
    list.forEach((image) => {
        resultList.push(<ImageContainer key={image._id} data={image} />)
    })
    return (
        <div>
            <MasonryLayout columns={6} gap={14} padding={80}>
                {resultList}
            </MasonryLayout>
            {loading ? (
                <div>
                    <span className="hint">Loading more images...</span>
                </div>
            ) : null}
            {atBottom ? (
                <div>
                    <span className="hint">There's no more images...</span>
                </div>
            ) : null}
        </div>
    )
}

export default ImageList
