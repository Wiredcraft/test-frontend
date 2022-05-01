import { memo, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { StoreContext } from "redux-react-hook";

import { fetchPosts } from '../../actions';
import './res/mansory.less';

const divideArray = (array, length) => {
    const newArray = [...array];
    const divideRes = Math.floor(newArray.length / length);
    let results = [];

    for (let i = 0; i < length; i++) {
        results.push(newArray.splice(0, divideRes));
    }

    for (let i = 0; i < newArray.length; i++) {
        results[i].push(newArray[i]);
    }

    results = results.filter(itm => itm.length);

    return results;
}

const Masonry = ({ }) => {
    const store = useContext(StoreContext);
    let [showImages, setImages] = useState([]);

    const settingColumns = useCallback(() => {
        if (window.innerWidth >= 1920) return 8
        if (window.innerWidth >= 1680) return 7
        if (window.innerWidth >= 1440) return 6
        if (window.innerWidth >= 1366) return 5
        if (window.innerWidth >= 1280) return 4
        if (window.innerWidth >= 1024) return 3
        if (window.innerWidth >= 768) return 2
        return 1
    }, []);
    const [columnCount, setColumn] = useState(() => settingColumns());

    const results = useMemo(() => {
        return divideArray(showImages, columnCount);
    }, [showImages, columnCount]);
    

    // 模拟生命周期函数componentDidUpdate
    useEffect(() => {
        // 响应式布局 窗口大小变化时 重新计算列的数目
        window.addEventListener('resize', () => setColumn(() => settingColumns()));

        // 取消事件绑定
        return window.removeEventListener('resize', () => setColumn(() => settingColumns()));
    }, [setColumn, settingColumns]);

    // useEffect模拟react生命周期componentDidMount
    useEffect(() => {
        store
            .dispatch(fetchPosts())
            .then(() => {
                const { getState } = store;
                const storeState = getState();
                const rawData = storeState.visibleItems;
                showImages = [].slice.call(rawData).map(t => t.src);
                setImages(showImages);
            });
    }, []);

    // useEffect模拟react生命周期componentDidUpdate
    useEffect(() => {

        // 监听state的变化
        let unsubscribe = store.subscribe(() => {
            const { getState } = store;
            const storeState = getState();
            const rawData = storeState.visibleItems;
            showImages = [].slice.call(rawData).map(t => t.src);
            setImages(showImages);
        })
        // 模拟react的生命周期componentWillUnmount
        return () => {
            // 取消监听
            unsubscribe();
        }
    }, [showImages]);

    return (
        <div className="mansory-container">
            {
                results && results.length ? 
                results?.map((itm, i) => (
                    <div key={i} className="mansory-column">
                        {
                            itm?.map((elm, i) => <div className="image-wrap" key={elm?.id ?? i}>
                                                    <img src={elm} />
                                                </div>
                            )
                        }
                    </div>
                ))
                : 
                <p>sorry, no results</p>
            }
        </div>
    );
}

export default memo(Masonry)