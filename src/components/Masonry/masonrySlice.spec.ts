import masonryReducer, {
  MasonryState,
  updateImages
} from './masonrySlice';

export const mockImgs = [
  {
    _id: '5f115174961c75468fbe0f44',
    index: 0,
    name: 'purple',
    src: 'https://picsum.photos/240/379?random=371'
  },
  {
    _id: '5f115174ad8e8ef73a0dab9e',
    index: 1,
    name: 'purple',
    src: 'https://picsum.photos/240/392?random=286'
  },
  {
    _id: '5f11517440a0b6750a7bc6c0',
    index: 2,
    name: 'yello',
    src: 'https://picsum.photos/240/409?random=286'
  },
  {
    _id: '5f1151743af104c006ecdbc0',
    index: 3,
    name: 'red',
    src: 'https://picsum.photos/240/395?random=302'
  },
  {
    _id: '5f1151744ab1f867ddc342dd',
    index: 4,
    name: 'green',
    src: 'https://picsum.photos/240/255?random=415'
  },
  {
    _id: '5f11517476f25b8a489d15f2',
    index: 5,
    name: 'green',
    src: 'https://picsum.photos/240/176?random=147'
  },
  {
    _id: '5f115174587b54fe6f1b9645',
    index: 6,
    name: 'red',
    src: 'https://picsum.photos/240/300?random=363'
  }
]

describe('header reducer', () => {
  const initialState: MasonryState = {
    images: [],
    status: 'idle'
  };
  it('should handle initial state', () => {
    expect(masonryReducer(undefined, { type: 'unknown' })).toEqual({
      images: [],
      status: 'idle'
    });
  });

  it('should handle update images', () => {
    const actual = masonryReducer(initialState, updateImages(mockImgs));
    expect(actual.images).toHaveLength(7);
  });
});
