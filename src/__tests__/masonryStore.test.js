import masonryStore from '../stores/masonry';

const mockImgs = [
  {
    _id: '5f115174961c75468fbe0f44',
    index: 0,
    name: 'purple',
    src: 'https://picsum.photos/240/379?random=371',
    height: 150,
  },
  {
    _id: '5f115174ad8e8ef73a0dab9e',
    index: 1,
    name: 'purple',
    src: 'https://picsum.photos/240/392?random=286',
    height: 90,
  },
  {
    _id: '5f11517440a0b6750a7bc6c0',
    index: 2,
    name: 'yello',
    src: 'https://picsum.photos/240/409?random=286',
    height: 100,
  },
  {
    _id: '5f1151743af104c006ecdbc0',
    index: 3,
    name: 'red',
    src: 'https://picsum.photos/240/395?random=302',
    height: 120,
  },
  {
    _id: '5f1151744ab1f867ddc342dd',
    index: 4,
    name: 'green',
    src: 'https://picsum.photos/240/255?random=415',
    height: 80,
  },
];

describe('masonry store', () => {
  it('init store with empty default values', () => {
    expect(masonryStore.originImgList.length).toBe(0);
    expect(masonryStore.renderImgList.length).toBe(0);
    expect(masonryStore.keyword).toBe('');
  });
  it('update image list', () => {
    masonryStore.updateOriginImgList(mockImgs);
    expect(masonryStore.originImgList.length).toBe(5);
  });
  it('update render image list correctly', () => {
    masonryStore.updateOriginImgList(mockImgs);
    masonryStore.updateRenderImgList(3);
    expect(masonryStore.renderImgList[1].length).toBe(2);
    expect(masonryStore.renderImgList[2].length).toBe(2);
  });
  it('update keyword and filtered image list', () => {
    masonryStore.updateOriginImgList(mockImgs);
    masonryStore.updateKeyword({ target: { value: 'red' } });
    expect(masonryStore.filteredImgList.length).toBe(1);
    masonryStore.updateKeyword({ target: { value: 'hello' } });
    expect(masonryStore.filteredImgList.length).toBe(0);
  });
});
