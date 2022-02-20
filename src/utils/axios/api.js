import request from '../axios/request';

export function getImages() {
  return new Promise((resolve) =>
    request('/api/images').then((res) => resolve(res.data))
  );
}
