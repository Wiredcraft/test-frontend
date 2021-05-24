import { ACTIONS } from './types';

export const loadMore = (payload: any) => {
    return {
        type: ACTIONS.LOAD_MORE,
        payload: payload
    }
};

export const loadPictureList = (action: any, payload: any) => {
    return {
        type: action,
        payload: payload,
    }
};

export const onSearch = (payload: any) => {
    return {
      type: ACTIONS.SEARCH,
      payload: payload
    };
};

  