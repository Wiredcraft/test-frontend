import mockData from '../mock.json';

/**
 *
 *
 * @param {*} {
 *   url,
 *   data
 * }
 * @returns
 */
function request({
  url,
  data
}) {
  const { pageSize, pageNo, keyword } = data;
  return Promise.resolve(mockData.filter(({ name }) => name.includes(keyword)).slice(pageNo * pageSize, (pageNo + 1) * pageSize))

}

export default request;