export interface CommonState {
  name: string;
}

export default {
  namespace: 'common',

  state: {
    name: '',
    list: [],
  },

  reducers: {
    setName(state: CommonState, { payload }: { payload: string }) {
      return {
        ...state,
        name: payload,
      };
    },
  },
};
