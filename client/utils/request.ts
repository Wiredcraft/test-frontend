import axios from 'axios';
import { LIMIT, OK_STATUS, SERVER_ADDRESS } from './consts';
import { IImage } from 'store/imageListSlice';

export interface IRequestImageListArgs {
  search: string;
  offset: number;
}

interface IRequestImageListRes {
  list: IImage[];
  hasMore: boolean;
}

export const requestImageList = ({ offset, search }: IRequestImageListArgs): Promise<IRequestImageListRes | void> => {
  const requestUrl = `${SERVER_ADDRESS}?offset=${offset}&limit=${LIMIT}&search=${search}`;
  return axios.get(requestUrl).then(({ data, status }) => {
    if (status === OK_STATUS && data.list) {
      return data;
    }
    return Promise.resolve();
  }).catch((err) => {
    console.log(err);
  });
};
