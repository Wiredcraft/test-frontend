const request = async (url: string, method = 'GET', headers: HeadersInit | undefined = undefined) => {
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
  });

  if (res.status < 300) {
    return res.json();
  } else {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
};

export default request;
