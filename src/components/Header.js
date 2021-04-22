import React, { useState, useEffect } from 'react'
import { Icon, Input } from 'antd'
import style from './Header.styl'

const Header = props => {
    const [keyWords, setKeyWords] = useState([])
    const search = (e) => {
        props.fetchList(keyWords)
    }

    const onChange = e => {
        setKeyWords(e.target.value)
    }

    return (
        <div className={style.header}>
            <div className={style.content}>
                <Input
                    prefix={<Icon type="search" style={{ fontSize: '18px', color: '#8a8a8a' }} />}
                    style={{width: '200px'}}
                    onPressEnter={e => search(e)}
                    onChange={e => onChange(e)}
                />
                <Icon type="home" theme="filled" style={{ fontSize: '20px', color: '#8a8a8a',  margin: '0 20px' }}/>
                <Icon type="bell" theme="filled" style={{ fontSize: '20px', color: '#8a8a8a', }}/>
            </div>
        </div>
    )
}

export default Header
