import { memo, useState, useContext, useRef } from "react"
import Glass from '../Icons/glass'
import './res/search.less'
import { filterPosts } from '../../actions'
import { StoreContext } from "redux-react-hook";

const Search = () => {
    const inputEle = useRef(null);
    const store = useContext(StoreContext);

    const [keyword, setKeyword] = useState("")

    const onInputChanged = (event) => {
        const keyword = event.target.value
        setKeyword(keyword)
    }

    const onSearch = () => {
        const keyword = inputEle.current?.value
        const items = store.getState().postsBySubreddit.reactjs.items
        store
        .dispatch(filterPosts('reactjs', items, keyword))
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
    )
}

export default memo(Search)