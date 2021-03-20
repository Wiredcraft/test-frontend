export default function reducer(state = "", action) {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
}
