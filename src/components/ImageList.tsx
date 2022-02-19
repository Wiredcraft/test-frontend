import { addImage, clearImage, nextPage } from '../features/imageListSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'
import React, { useEffect, useState } from 'react'
import { ImageContainer } from './ImageContainer'
import MasonryLayout from './MasonryLayout'

const getImages = async (url: string) => {
    const fetch = window.fetch
    try {
        const res = await fetch(url)
        return res.json()
    } catch (e) {
        console.error('Request Failed', e)
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
    let isBottom = false
    const getImage = async (searchString?: string) => {
        // get image from json-server
        let url = `http://localhost:3002/images?_page=${page}&_limit=${limit}`
        if (searchString) {
            url += `&_search=${searchString}`
            if (prevSearch !== searchString) {
                dispatch(clearImage())
            }
        }
        const res = await getImages(url)
        if (res.length < limit) {
            setAtBottom(true)
            isBottom = true
        }
        dispatch(addImage(res))
    }
    const handleScroll = () => {
        // load at bottom
        const bottom =
            Math.ceil(window.scrollY + window.innerHeight) >=
            document.body.offsetHeight
        if (bottom) {
            console.log('at bottom', isBottom)
            console.log('page', page)
            if (!isBottom) {
                page += 1
                dispatch(nextPage())
                getImage(prevSearch)
            }
        }
    }
    useEffect(() => {
        console.log('effect search', search)
        getImage(search)
        if (prevSearch !== search) {
            setPrevSearch(search)
        }
        console.log('previous search', prevSearch)
        window.addEventListener('scroll', handleScroll, {
            passive: true
        })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        // only get image after search string update
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, prevSearch])
    list.forEach((image) => {
        resultList.push(<ImageContainer key={image._id} data={image} />)
    })
    return (
        <div>
            <input
                style={{ display: 'none' }}
                id="search"
                value={search}
                onChange={(e) => {
                    console.log(e.target.value)
                }}
            />
            <MasonryLayout columns={6} gap={14} padding={80}>
                {resultList}
            </MasonryLayout>
            {atBottom ? (
                <div>
                    <span style={{ color: '#CCC' }}>
                        There's no more images...
                    </span>
                </div>
            ) : null}
        </div>
    )
}

export default ImageList
