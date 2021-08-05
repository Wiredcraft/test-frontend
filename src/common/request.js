import mockData from '../mock.json';


const BASE_URL = 'http://localhost:8080';

// TODO: complete it
function request({
  url,
  method = 'get',
  data = {},
}) {
  
  if (method.toLowerCase() === 'get') {
    const queryString = Object
      .keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');

    url = `${BASE_URL}${url}?${queryString}`;
  }

  const fetchOptions = method.toLowerCase() === 'get'
    ? {}
    : { body: JSON.stringify(data) }

  return fetch(url, fetchOptions).then(res => res.json())

}

export default request;