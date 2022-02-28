import { SET_IMAGES } from "../actionTypes/images";

let data = {
    // 图片列表
    images: [],
    // 查询条件
    queryStr: "",
};

export default function Images(state = data, action) {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
