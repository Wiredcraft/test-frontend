let data = [
  {
    id: "0001",
    title: "Shan State",
    level: "State",
    lastIn: "2020/02/02",
    numForms: "123,456",
    numVotes: "123,456",
    update: "342,456",
    isHidden: false,
    subRegions: [
      {
        id: "00011",
        title: "Aunglan District",
        level: "District",
        lastIn: "2020/02/02",
        numForms: "123,456",
        numVotes: "123,456",
        update: "342,456",
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
    ]
  },

  {
    id: "0002",
    title: "Beijing State",
    level: "State",
    lastIn: "2020/02/02",
    numForms: "123,456",
    numVotes: "123,456",
    update: "342,456",
    isHidden: false,
    subRegions: [
      {
        id: "00021",
        title: "xichen District",
        level: "District",
        lastIn: "2020/02/02",
        numForms: "123,456",
        numVotes: "123,456",
        update: "342,456",
        isHidden: true,
        subRegions: []
      },
      {
        id: "00022",
        title: "dongcheng District",
        level: "District",
        lastIn: "2020/02/02",
        numForms: "123,456",
        numVotes: "123,456",
        update: "342,456",
        isHidden: true,
        subRegions: [
          {
            id: "000221",
            title: "congwen Township",
            level: "Township",
            lastIn: "2020/02/02",
            numForms: "123,456",
            numVotes: "123,456",
            update: "342,456",
            isHidden: true,
            subRegions: []
          },
          {
            id: "000222",
            title: "jianguo Township",
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
    ]
  },
  // d{d
  //   id: "0003",
  //   title: "Wuhan State",
  //   level: "State",
  //   lastIn: "2020/02/02",
  //   numForms: "123,456",
  //   numVotes: "123,456",
  //   update: "342,456",
  //   isHidden: false,
  //   subRegions: [
  //     {
  //       id: "00031",
  //       title: "Qingshan District",
  //       level: "District",
  //       lastIn: "2020/02/02",
  //       numForms: "123,456",
  //       numVotes: "123,456",
  //       update: "342,456",
  //       isHidden: true,
  //       subRegions: []
  //     },
  //     {
  //       id: "00032",
  //       title: "Hankou District",
  //       level: "District",
  //       lastIn: "2020/02/02",
  //       numForms: "123,456",
  //       numVotes: "123,456",
  //       update: "342,456",
  //       isHidden: true,
  //       subRegions: [
  //         {
  //           id: "000321",
  //           title: "hanyang Township",
  //           level: "Township",
  //           lastIn: "2020/02/02",
  //           numForms: "123,456",
  //           numVotes: "123,456",
  //           update: "342,456",
  //           isHidden: true,
  //           subRegions: []
  //         },
  //         {
  //           id: "000322",
  //           title: "wudaokou Township",
  //           level: "Township",
  //           lastIn: "2020/02/02",
  //           numForms: "123,456",
  //           numVotes: "123,456",
  //           update: "342,456",
  //           isHidden: true,
  //           subRegions: []
  //         }
  //       ]
  //     }
  //   ]
  // }d,
  {
    id: "0004",
    title: "Shan State",
    level: "State",
    lastIn: "2020/02/02",
    numForms: "123,456",
    numVotes: "123,456",
    update: "342,456",
    isHidden: false,
    subRegions: []
  },
  {
    id: "0005",
    title: "Shan State",
    level: "State",
    lastIn: "2020/02/02",
    numForms: "123,456",
    numVotes: "123,456",
    update: "342,456",
    isHidden: false,
    subRegions: []
  }
];

console.log(data[0].subRegions[0]);

let numStates = data.length;

//Accessing district array
// for (let i = 0; i < numStates; i++) {
//   let numDist = data[i].subRegions.length;
//   for (let dist = 0; dist < numDist; dist++) {}
// }

//Accessing town array
for (let i = 0; i < numStates; i++) {
  let numDist = data[i].subRegions.length;
  for (let dist = 0; dist < numDist; dist++) {
    console.log(data[i].subRegions);

    let numTown = data[i].subRegions[dist].subRegions.length;

    for (let town = 0; town < numTown; town++) {
      // console.log(data[i].subRegions[dist].subRegions);
    }
  }
}
