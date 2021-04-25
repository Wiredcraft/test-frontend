import { createStore } from 'redux';
import { GetImgsAction, GET_IMGS } from './types';



const fs = require('fs');

let initState  = {
    imgInfo: require('../data/data.json') as any [],
    searchWord: ""
}

let allImg = require('../data/data.json') as any [];


export function ImgReducer(state = initState, action: GetImgsAction){
    switch (action.type) {
        case GET_IMGS:
            let imgInfo = allImg.filter(x => x.name.indexOf(action.keyWord) >= 0);
            state.imgInfo = imgInfo;
            return state;
        default:
            return state;
    }
}

const store = createStore(ImgReducer);

export default store;