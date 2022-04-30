import { memo, useContext, useEffect, useMemo, useState } from "react"
import { StoreContext } from "redux-react-hook"
import { fetchPosts } from '../../actions'

const divideArray = (array, length) => {
    const newArray = [...array]
    const divideRes = Math.floor(newArray.length / length)
    let results = []

    for (let i = 0; i < length; i++) {
        results.push(newArray.splice(0, divideRes))
    }

    for (let i = 0; i < newArray.length; i++) {
        results[i].push(newArray[i])
    }

    results = results.filter(itm => itm.length)

    return results
}

const masonryContainerStyle = {
    display: 'flex',
    justifyContent: 'center'
}

const masonryColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}

const Masonry = ({ dataArray, columnCount, ChildsElement }) => {
    const store = useContext(StoreContext)
    let { getState } = store

    let storeState = getState()
    let [showImages, setImages] = useState([]);
    if (storeState.postsBySubreddit.reactjs.isFetching) {
        // 显示加载loader
        console.log('mansory data is fetching...')
    }


    const results = useMemo(() => {
        return divideArray(showImages, columnCount)
    }, [showImages, columnCount])

    // useEffect模拟react生命周期componentDidMount
    useEffect(() => {
        store
            .dispatch(fetchPosts('reactjs'))
            .then(() => {
                console.log('获取数据中..', store.getState())
                const rawData = store.getState().postsBySubreddit.reactjs.visibleItems
                showImages = [].slice.call(rawData).map(t => t.src)
                setImages(showImages)
            })

        // 监听state的变化
        let unsubscribe = store.subscribe(() => {
            console.log('监听中..', store.getState())
            const rawData = store.getState().postsBySubreddit.reactjs.visibleItems
            showImages = [].slice.call(rawData).map(t => t.src)
            setImages(showImages)
        })
        // return出来的函数本来就是更新前，销毁前执行的函数，现在不监听任何状态，所以只在销毁前执行 用于模拟react的生命周期componentWillUnmount
        return () => {
            // 取消监听
            unsubscribe();
        }
    }, [])

    return (
        <div style={masonryContainerStyle}>
            {
                results?.map((itm, i) => (
                    <div key={i} style={masonryColumnStyle}>
                        {
                            itm?.map((elm, i) => <ChildsElement value={elm} key={elm?.id ?? i} />)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default memo(Masonry)