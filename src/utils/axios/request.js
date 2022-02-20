import axios from 'axios';

const request = async (url, method = 'GET', headers) => {
  const res = await axios(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
  });

  if (res.status < 300) {
    return res;
  } else {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
};

export default request;
