import Request from "./components/base/Request";
export default {
  namespace: "model",
  state: {
    //originData
    data: [],
    limit: 20,
    pager: 1,
    name: "",
  },
  reducers: {
    /**
     * @param {any} state
     */

    reducerGetPage(state, { payload }) {
      return {
        ...state,
        data: state.data.concat(payload),
        pager: state.pager + 1,
      };
    },
    // @ts-ignore
    reducerResetPage(state, { payload }) {
      return {
        ...state,
        pager: 1,
        data: [],
        name: payload,
      };
    },
  },
  effects: {
    *getPage({ payload, callback }, { call, put, select }) {
      const name = yield select((state) => state.model.name),
        pager = yield select((state) => state.model.pager),
        limit = yield select((state) => state.model.limit);
      if (name) {
        payload.name = name;
      }
      if (pager < Math.floor(100 / limit) + 1) {
        const response = yield call(Request, "data", payload, "GET");
        if (response && response.length > 0) {
          yield put({
            type: "reducerGetPage",
            payload: response,
          });
        }
      }
    },
    //when doing search action
    *resetPage({ payload, callback }, { call, put, select }) {
      yield put({
        type: "reducerResetPage",
        payload,
      });
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
};
