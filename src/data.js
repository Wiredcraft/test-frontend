let randomNumber = () => {
    return Math.floor(Math.random() * (999999 - 99999) + 99999);
};

let randomCharacter = () =>{
    return String.fromCharCode(Math.floor(Math.random()*26)+"A".charCodeAt(0))
}

export  var RegionStates =
  [
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "lhan state",
          childRegions : [
                  {
                      regionClass : "disctricts",
                      subRegionClass : "townships",
                      name : randomCharacter() + randomCharacter() +  "Cunglan",
                      lastInput : randomNumber() ,
                      numberOfForms : randomNumber() ,
                      numberOfVotes : randomNumber() ,
                      update : randomNumber() ,
                      childRegions : [
                        {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                        },
                          {
                              regionClass : "townships",
                              name : randomCharacter() + randomCharacter() +  "Lollen",
                              lastInput : randomNumber() ,
                              numberOfForms : randomNumber() ,
                              numberOfVotes : randomNumber() ,
                              update : randomNumber()
                          }
                      ]
                  },
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              },
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Bunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              }
              ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      },
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "Than state",
          childRegions : [
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber()
              }
          ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      } ,
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "Shan state",
          childRegions : [
                {
                    regionClass : "disctricts",
                    subRegionClass : "townships",
                    name : randomCharacter() + randomCharacter() +  "Aunglan",
                    lastInput : randomNumber() ,
                    numberOfForms : randomNumber() ,
                    numberOfVotes : randomNumber() ,
                    update : randomNumber()
                }
            ],
        lastInput : randomNumber() ,
        numberOfForms : randomNumber() ,
        numberOfVotes : randomNumber() ,
        update : randomNumber()
      },
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "Shan state",
          childRegions : [
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber()
              }
          ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      },
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "lhan state",
          childRegions : [
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Cunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              },
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              },
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Bunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              }
          ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      },
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "Shan state",
          childRegions : [
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber()
              }
          ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      },
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "lhan state",
          childRegions : [
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Cunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              },
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              },
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Bunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber() ,
                  childRegions : [
                      {
                          regionClass : "townships",
                          name : randomCharacter() + randomCharacter() +  "Lollen",
                          lastInput : randomNumber() ,
                          numberOfForms : randomNumber() ,
                          numberOfVotes : randomNumber() ,
                          update : randomNumber()
                      }
                  ]
              }
          ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      },
      {
          regionClass : "states",
          subRegionClass : "disctricts",
          name : randomCharacter() + randomCharacter() +  "Shan state",
          childRegions : [
              {
                  regionClass : "disctricts",
                  subRegionClass : "townships",
                  name : randomCharacter() + randomCharacter() +  "Aunglan",
                  lastInput : randomNumber() ,
                  numberOfForms : randomNumber() ,
                  numberOfVotes : randomNumber() ,
                  update : randomNumber()
              }
          ],
          lastInput : randomNumber() ,
          numberOfForms : randomNumber() ,
          numberOfVotes : randomNumber() ,
          update : randomNumber()
      }
  ];
