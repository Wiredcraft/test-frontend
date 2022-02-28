import { SET_IMAGES } from "../actionTypes/images";

// 存储图片列表
export function setImages(payload) {
    return {
        type: SET_IMAGES,
        payload,
    };
}
