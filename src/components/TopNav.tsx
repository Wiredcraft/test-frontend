import React, { useState } from 'react'
import { changeSearch } from '../features/imageListSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'

const fontColor = '#8A8A8A'

const TopNav: React.FC = () => {
    const navStyle: React.CSSProperties = {
        width: '100%',
        height: '70px',
        boxShadow: '0px 4px 8px 0px #67666640',
        marginBottom: '18px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
    return (
        <nav style={navStyle}>
            <TopNavSearch />
            <div
                style={{
                    display: 'flex',
                    width: '120px',
                    justifyContent: 'space-between',
                    marginLeft: '35px',
                    marginRight: '35px'
                }}
            >
                <TopNavBtns key="home" icon="fa-house" />
                <TopNavBtns key="notification" icon="fa-bell" />
                <TopNavBtns key="user" icon="fa-circle-user" />
            </div>
        </nav>
    )
}

const TopNavSearch: React.FC = () => {
    const dispatch = useAppDispatch()

    const searchStyle: React.CSSProperties = {
        width: '200px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '18px',
        paddingRight: '18px',
        borderRadius: '18px',
        backgroundColor: '#EAEAEA'
    }
    const searchInputStyle: React.CSSProperties = {
        lineHeight: '36px',
        border: 'none',
        width: '100%',
        outline: 'none',
        background: 'transparent',
        color: fontColor
    }
    const searchData = useAppSelector((state) => state.imageList.search)
    const [searchString, setSearchString] = useState(searchData)
    const search = (e: any) => {
        const searchString = e.target.value
        dispatch(changeSearch(searchString))
        setSearchString(searchString)
        console.log(searchData)
    }
    return (
        <div style={searchStyle}>
            <i
                className="fa-solid fa-magnifying-glass fa-lg"
                style={{
                    marginLeft: '-4px',
                    marginRight: '4px',
                    color: fontColor
                }}
            />
            <input
                style={searchInputStyle}
                type="text"
                placeholder="Search"
                alt="Search"
                onChange={search}
                value={searchString}
            />
        </div>
    )
}

const TopNavBtns: React.FC<{ icon: string }> = (props) => {
    const btnStyle: React.CSSProperties = {
        color: fontColor
    }
    return (
        <div style={btnStyle}>
            <i className={`fa-solid ${props.icon} fa-xl`} />
        </div>
    )
}

export { TopNav }
