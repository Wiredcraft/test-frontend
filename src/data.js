export default [
  { 
    id:'1',
    level: 'state',
    name: 'Shan state',
    sub: [
      {
        id:'1-1',
        level: 'district',
        name: 'Aunglan',
        sub: [
          {
            id:'1-2',
            level: 'township',
            name: 'Loilen'
          }
        ]
      }
    ]
  },
  {
    id:'2',
    level: 'state',
    name: 'ShangHai',
    sub: [
      {
        id:'2-1',
        level: 'district',
        name: 'PuDong'
      },
      {
        id:'2-2',
        level: 'district',
        name: 'JingAn'
      }
    ]
  },{
    id:'3',
    level: 'state',
    name: 'BeiJing'
  }
]