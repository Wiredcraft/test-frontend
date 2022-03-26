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
      let list = [];
      if (!name.trim()) {
        // if string is empty
        list = allList.slice();
      } else {
        list = allList.filter((item) => item.name.includes(name));
      }
      list = list.slice(offset, offset + limit);

      const result = {
        total: allList.length,
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
