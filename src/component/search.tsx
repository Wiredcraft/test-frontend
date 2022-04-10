import { ChangeEventHandler } from "react"
import { IconSearch } from "./icons"

export const Search = (props: { onChange?: ChangeEventHandler<HTMLInputElement> }) => {
    return <div className="search-input-wrap">
        <IconSearch />
        <input className="search-input" {...props} />
    </div>
}