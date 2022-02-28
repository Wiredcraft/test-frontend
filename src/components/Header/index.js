import "./index.css";
import { useDispatch } from "react-redux";
import { setImages } from "../../store/action/images";
import { HomeIcon, MyIcon, SearchIcon, TisIcon } from "./methods";
/**
 * 多个页面共享头部组件，图片因为下不了png采用svg，
 * @returns 页面头部
 */
export default function Header() {
    // dispatch
    const dispatch = useDispatch();

    // 监听输入框的值， 以立即响应列表的方式
    const onChangeValue = async e => {
        let value = e.target.value;
        let obj = {};
        if (value) {
            obj = { queryStr: value, page: 1 };
        } else {
            obj = { queryStr: value, page: 1, images: [] };
        }
        dispatch(setImages(obj));
    };

    return (
        <div className="header-body">
            <div className="header-right">
                <div className="right-input">
                    <SearchIcon />
                    <input
                        className="input-name"
                        onChange={onChangeValue}
                    ></input>
                </div>
                <HomeIcon />
                <TisIcon />
                <MyIcon />
            </div>
        </div>
    );
}
