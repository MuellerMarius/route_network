export default (state, action) => {
  switch (action.type) {
    case "CHANGE_PROJECTION":
      return {
        ...state,
        onlyEurope: action.payload
      };
    default:
      return state;
  }
};
