import { memo, useState } from "react"
import Glass from '../Icons/glass'
import './res/search.less'

const Search = ({}) => {
    const [keyword, setKeyword] = useState("")
    return (
        <div className="search-container">
            <div className="search-inner">
                <Glass />
                <input type="text" value={keyword} onChange={setKeyword}></input>
            </div>
        </div>   
    )
}

export default memo(Search)