import React, { useState } from 'react'
import { changeSearch } from '../features/imageListSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'
import './TopNav.scss'

const TopNav: React.FC = () => {
    return (
        <nav>
            <TopNavSearch />
            <div className="top-nav-actions">
                <TopNavBtns id="home" key="home" icon="fa-house" />
                <TopNavBtns
                    id="notification"
                    key="notification"
                    icon="fa-bell"
                />
                <TopNavBtns id="user" key="user" icon="fa-circle-user" />
            </div>
        </nav>
    )
}

const TopNavSearch: React.FC = () => {
    const dispatch = useAppDispatch()
    const searchData = useAppSelector((state) => state.imageList.search)
    const [searchString, setSearchString] = useState(searchData)
    const search = (e: any) => {
        const searchString = e.target.value
        dispatch(changeSearch(searchString))
        setSearchString(searchString)
    }
    return (
        <div className="search">
            <i className="fa-solid fa-magnifying-glass fa-lg search-icon" />
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                alt="Search"
                onChange={search}
                value={searchString}
            />
        </div>
    )
}

const TopNavBtns: React.FC<{ icon: string; id: string }> = (props) => {
    return (
        <div id={props.id} className="nav-btns" data-testid={props.id}>
            <i className={`fa-solid ${props.icon} fa-xl`} />
        </div>
    )
}

export { TopNav }
