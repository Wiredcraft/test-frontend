import allList from './data.json';

// fake a list API
export const getList = ({
  name,
  limit,
  offset,
}: {
  name: string;
  limit: number;
  offset: number;
}) =>
  new Promise((resolve) => {
    setTimeout(() => {
      let matchedList = [];
      if (!name.trim()) {
        // if string is empty, match all
        matchedList = allList.slice();
      } else {
        matchedList = allList.filter((item) => item.name.includes(name));
      }
      const list = matchedList.slice(offset, offset + limit);

      const result = {
        total: matchedList.length,
        list,
      };

      console.log('=====get list=====');
      console.log(name, limit, offset);
      console.log('=====result=====');
      console.log(result);
      console.log('');

      resolve(result);
    }, 500);
  });
