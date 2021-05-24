import { combineReducers } from 'redux';
import { ACTIONS, LOAD_MORE_STATUS, LoadPictureListStateType, SearchStateType, SearchActionType, LoadMoreActionType, LoadMoreStateType } from './types';

const initialStateIsLoad : LoadPictureListStateType = {
  pictureList: [],
};

export const loadPictureListReducer = (state = initialStateIsLoad, action: any) : LoadPictureListStateType => {
  switch (action.type) {
    case ACTIONS.LOAD_PICTURE_LIST:
      const data = action.payload;
      const prev = new Set(state.pictureList);
      return {
        ...state,
        pictureList: [...prev, ...data],
    };
    case ACTIONS.RESET:
      return initialStateIsLoad
    default:
      return state;
  }
};

const initialStateLoadMore : LoadMoreStateType = {
  loadMoreStatus: LOAD_MORE_STATUS.LOADING,
};

export const loadMoreReducer = (state = initialStateLoadMore, action: LoadMoreActionType) : LoadMoreStateType => {
  switch (action.type) {
    case ACTIONS.LOAD_MORE:
      return {
        ...state,
        loadMoreStatus: action.payload,
    };
    default:
      return state;
  }
};

const initialStateSearch : SearchStateType = {
  query: "",
  onEnterSearch: false,
};

const searchReducer = (state = initialStateSearch, action: SearchActionType) : SearchStateType => {
  switch (action.type) {
    case ACTIONS.SEARCH:
      const { query, onEnterSearch } = action.payload;
      return {
        ...state,
        query: query,
        onEnterSearch: onEnterSearch
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  load: loadPictureListReducer,
  loadMore: loadMoreReducer,
  search: searchReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;