export default (state, action) => {
  switch (action.type) {
    case "CHANGE_PROJECTION":
      return {
        ...state,
        onlyEurope: action.payload
      };
    case "LOAD_DATA":
      return {
        ...state,
        routes: action.payload
      };
    default:
      return state;
  }
};
