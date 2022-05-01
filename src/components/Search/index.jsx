import { memo, useState, useContext, useRef } from "react";
import { StoreContext } from "redux-react-hook";

import { filterPosts } from '../../actions';
import Glass from '../Icons/glass';
import './res/search.less';

const Search = () => {
    const inputEle = useRef(null);
    const store = useContext(StoreContext);

    const [keyword, setKeyword] = useState("");

    /**
     * 输入框内容发生改变的回调函数
     * @param {SyntheticEvent} event 
     */
    const onInputChanged = (event) => {
        const keyword = event.target.value;
        setKeyword(keyword);
    }

    /**
     * 点击搜索按钮的回调函数
     */
    const onSearch = () => {
        const keyword = inputEle.current?.value;
        const { getState } = store;
        const { items } = getState();
        store
        .dispatch(filterPosts(items, keyword));
    }

    return (
        <div className="search-container">
            <div className="search-inner">
                <div onClick={onSearch}>
                <Glass />
                </div>
                <input type="text" value={keyword} onChange={onInputChanged} ref={inputEle}></input>
            </div>
        </div>   
    );
}

export default memo(Search)