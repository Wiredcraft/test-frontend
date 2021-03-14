import { combineReducers } from "redux";

let initialState = {
    loading: false,
    imgList: [],
    filteredImgList: [],
    error: null
};

const gallery = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                imgList: action.items,
                filteredImgList: action.items
            };
        case "FETCH_DATA_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                imgList: [],
                filteredImgList: []
            };
        case "FILTER_BY_NAME":
            let newState = Object.assign({}, state);
            let value = action.payload.value;
            // console.log(value);
            let filteredValues = state.imgList.filter((item) => {
                return item.name.toLowerCase().includes(value.toLowerCase());
            });
            if (value) {
                newState.filteredImgList = filteredValues;
            } else {
                newState.filteredImgList = newState.imgList;
            }
            return newState;

        default:
            return state;
    }
};

export default combineReducers({
    gallery
});
