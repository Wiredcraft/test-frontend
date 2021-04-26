const request = async (url, method = 'GET', headers) => {
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'applicatoin/json', ...headers },
  });

  if (res.status < 300) {
    return await res.json();
  } else {
    throw new Error(
      `Request failed with code ${res.status}, ${res.statusText}`
    );
  }
};

export default request;
