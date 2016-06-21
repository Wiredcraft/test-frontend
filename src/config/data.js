// todo: load initialize data via ajax
export const tableData = [
  {
    region: 'State',
    inpot: '2014/12/12',
    forms: '123,456',
    voters: '123,456',
    update: '342,456',
    selected: true,
    id: 1001,
    subLId: 0,
    parentId: 0,
  },
  {
    region: 'State',
    inpot: '2014/12/12',
    forms: '123,456ed',
    voters: '123,456ed',
    update: '342,456ed',
    id: 1002,
    subLId: 1005,
    parentId: 0,
  },
  {
    region: 'district',
    inpot: '2014/12/12',
    forms: '123,456',
    voters: '123,456',
    update: '342,456',
    id: 1005,
    subLId: 1006,
    parentId: 1002,
  },
  {
    region: 'township',
    inpot: '2014/12/12',
    forms: '123,456',
    voters: '123,456',
    update: '342,456',
    id: 1006,
    subLId: 0,
    parentId: 1005
  },
  {
    region: 'State',
    inpot: '2014/12/12',
    forms: '123,456',
    voters: '123,456',
    update: '342,456',
    id: 1007,
    subLId: 0,
    parentId: 0
  },
  {
    region: 'State',
    inpot: '2014/12/12',
    forms: '123,456',
    voters: '123,456',
    update: '342,456',
    id: 1008,
    subLId: 0,
    parentId: 0
  },
  {
    region: 'State',
    inpot: '2014/12/12',
    forms: '123,456',
    voters: '123,456',
    update: '342,456',
    subLId: 0,
    parentId: 0
  },
];

export const triggerId = 0;
