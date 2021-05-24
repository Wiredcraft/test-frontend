export const ACTIONS = {
    LOAD_MORE: 'LOAD_MORE',
    LOAD_PICTURE_LIST: 'LOAD_PICTURE_LIST',
    SEARCH: 'SEARCH',
    RESET: 'RESET',
};

export const LOAD_MORE_STATUS = {
  LOADING: 'LOAD_MORE_LOADING',
  PAUSE: 'LOAD_MORE_PAUSE',
  STOP: 'LOAD_MORE_STOP',
  RESET: 'LOAD_MORE_RESET'
};

export type pictureCard = {
  _id: string;
  index?: number;
  name: string;
  src: string;
  isLoading?: boolean;
};

export type searchParams = {
  search?: string;
  page?: number;
};

export type LoadPictureListStateType = {
  pictureList: pictureCard[]
};

export type LoadPictureListActionType =  {
  type: typeof ACTIONS.LOAD_PICTURE_LIST;
  payload: pictureCard[],
};

// loading, pause, stop
export type LoadMoreStateType = {
  loadMoreStatus: string,
};

export type LoadMoreActionType =  {
  type: typeof ACTIONS.LOAD_MORE;
  payload: string;
};

export type SearchStateType = {
  query: string,
  onEnterSearch: boolean
};

export type SearchActionType =  {
  type: typeof ACTIONS.SEARCH;
  payload: {
    query: string,
    onEnterSearch: boolean,
  }
};
