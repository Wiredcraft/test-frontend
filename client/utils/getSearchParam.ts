export function getSearchParam(search: string) {
  if (search === '') {
    return '';
  }
  try {
    const searchArr = search.replace(/^\/\?/, '').split('&');
    return searchArr.find(pair => /search\=/.test(pair))?.split('=')[1] || '';

  } catch (err) {
    return '';
  }
}