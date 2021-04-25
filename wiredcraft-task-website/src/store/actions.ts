import {GET_IMGS} from './types'

export const getImg = (name: string) => {
    return {
        type: GET_IMGS,
        keyWord: name
    }
}
    
