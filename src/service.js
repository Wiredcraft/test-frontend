import request from './common/request';

export const fetchImageList = data => {
  return request({
    url: '/images/get',
    data
  })
}