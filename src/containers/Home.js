import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from 'component/Header'
import Masonry from 'component/Masonry'
import style from './Home.styl'

const Home = props => {
    const { dispatch } = props;
    const [renderList, setRenderList] = useState([])
    const [renderUid, setRenderUid] = useState('')

    useEffect(() => {
        fetchList()
    }, [])

    const fetchList = (keyWords = '') => {
        dispatch('app.getImage', { keyWords }).then(data => {
            // 模拟搜索
            if (keyWords.trim()) {
                setRenderList(data.filter(d => d.name.includes(keyWords)))
            } else {
                setRenderList(data)
            }

            setRenderUid(Date.now())
        })
    }

    return (
        <div>
            <Header fetchList={fetchList} />
            <div className={style.container}>
                {
                    renderList.length ?
                    <Masonry
                        renderUid={renderUid}
                        imgList={renderList}
                        imgWidth={190}
                        ImgRight={10}
                        ImgBottom={10}
                    /> : null
                }
            </div>
        </div>
    )
}

export default withRouter(connect(state => ({
    imgList: _.get(state, 'app.imgList', []),
}))(Home))