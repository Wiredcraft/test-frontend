import headerReducer, {
  HeaderState,
  updateKeyword
} from './headerSlice';

describe('header reducer', () => {
  const initialState: HeaderState = {
    keyword: '',
  };
  it('should handle initial state', () => {
    expect(headerReducer(undefined, { type: 'unknown' })).toEqual({
      keyword: '',
    });
  });

  it('should handle update keyword', () => {
    const actual = headerReducer(initialState, updateKeyword('foo'));
    expect(actual.keyword).toEqual('foo');
  });
});
