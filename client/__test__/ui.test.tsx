import '@testing-library/jest-dom';
import * as React from 'react'
import { render, screen, act } from '@testing-library/react';
import { store } from 'store/store';
import { Provider } from 'react-redux'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { fetchImageList } from 'store/imageListSlice';
import App from '../App';

const getPurpleImageResponse = {
  list: [{
    "_id": "5f115174961c75468fbe0f44",
    "index": 0,
    "name": "purple",
    "src": "https://picsum.photos/240/379?random=371"
  }], hasMore: true}

const mockPurpleImageResponse = () => {
  const mock = new MockAdapter(axios)
  mock.onGet('http://localhost:3000/images?offset=0&limit=15&search=').reply(200, getPurpleImageResponse)
}

const mockEmptyImageResponse = () => {
  const mock = new MockAdapter(axios)
  mock.onGet('http://localhost:3000/images?offset=0&limit=15&search=').reply(200, { list: [], hasMore: false })
}


describe('App UI', () => {
  describe('initialize', () => {
    it('header should be rendered in document', () => {
      render(<Provider store={store}><App /></Provider>);
      expect(screen.getByLabelText('header')).toBeInTheDocument();
    });
    it('masonry should be rendered in document', () => {
      render(<Provider store={store}><App /></Provider>);
      expect(screen.getByLabelText('masonry')).toBeInTheDocument();
    });
  });

  describe('render list', () => {
    it('test render of list data by mock request', async () => {
      mockPurpleImageResponse();
      await act(async () => {
        await store.dispatch(fetchImageList({ offset: 0, search: '' }));
        render(<Provider store={store}><App /></Provider>);
      });
      const list = store.getState().imageList.list;
      expect(list.length).toEqual(1);
      expect(screen.getByLabelText('img_purple')).toBeInTheDocument();
    });
    it('test render of empty list data by mock request', async () => {
      mockEmptyImageResponse();
      await act(async () => {
        await store.dispatch(fetchImageList({ offset: 0, search: '' }));
        render(<Provider store={store}><App /></Provider>);
      });
      expect(screen.getByLabelText('empty')).toBeInTheDocument();
    });
  });
});