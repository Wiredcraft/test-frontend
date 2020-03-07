export default [
  // {
  //   id: "0001",
  //   title: "Shan State",
  //   level: "State",
  //   lastIn: "2020/02/02",
  //   numForms: "123,456",
  //   numVotes: "123,456",
  //   update: "342,456",
  //   isHidden: false
  // },
  {
    id: "00011",
    title: "Aunglan District",
    level: "District",
    lastIn: "2020/02/02",
    numForms: "123,456",
    numVotes: "123,456",
    update: "342,456",
    refStateId: "0001",
    isHidden: true,
    subRegions: [
      {
        id: "000111",
        title: "Loilen Township",
        level: "Township",
        lastIn: "2020/02/02",
        numForms: "123,456",
        numVotes: "123,456",
        update: "342,456",
        isHidden: true,
        subRegions: []
      }
    ]
  }
];
