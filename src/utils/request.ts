const request = async (url: string, method = 'GET', headers: HeadersInit | undefined = undefined) => {
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
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
