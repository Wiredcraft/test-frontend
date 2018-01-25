const random = (min, max) => {
  var num = Math.floor(Math.random() * (max - min)) + min
  return num
}
const initList = key => {
  const getName = num => {
    let arr = []
    for (var i = 0; i < num; i++) {
      arr[arr.length] =
        key[random(0, key.length)] +
        key[random(0, key.length)] +
        key[random(0, key.length)]
    }
    return arr
  }
  let stateList = getName(6)
  let districtList = getName(10)
  let townList = getName(10)
  let list = []
  for (let i = 0; i < 50; i++) {
    list[list.length] = {
      State: stateList[random(0, stateList.length)],
      District: districtList[random(0, districtList.length)],
      Town: townList[random(0, townList.length)],
      lastInput: 1234
    }
  }
  return list
}
const initialList = initList("ABCDEFGHIJK")

export default initialList
