// todo: load initialize data via ajax
export const tableData = [
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    selected: true,
    id: 1001,
    subLId: 0,
    parentId: 0,
  },
  {
    region: 'State',
    inpot: 'Unemployed',
    forms: 'Unemployed',
    voters: 'Unemployed',
    update: 'Unemployed',
    id: 1002,
    subLId: 1005,
    parentId: 0,
  },
  {
    region: 'district',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: 1005,
    subLId: 1006,
    parentId: 1002,
  },
  {
    region: 'township',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: 1006,
    subLId: 0,
    parentId: 1005
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: 1007,
    subLId: 0,
    parentId: 0
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: 1008,
    subLId: 0,
    parentId: 0
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    subLId: 0,
    parentId: 0
  },
];

export const triggerId = 0;
