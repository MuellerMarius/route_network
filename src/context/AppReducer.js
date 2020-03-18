export default (state, action) => {
  switch (action.type) {
    case "CHANGE_PROJECTION":
      return {
        ...state,
        onlyEurope: action.payload
      };
    case "CHANGE_THEME":
      return {
        ...state,
        themeLight: action.payload
      };
    case "LOAD_DATA":
      console.log("import");
      return {
        ...state,
        routes: action.payload
      };
    case "ADD_ROUTE":
      return {
        ...state,
        routes: [...state.routes, action.payload]
      };
    case "DELETE_ROUTE":
      return {
        ...state,
        routes: state.routes.filter(route => route.id !== action.payload)
      };
    case "EDIT_ROUTE":
      const index = state.routes.findIndex(
        route => route.id === action.payload.id
      );
      if (index === -1) {
        console.log("Object to mutate not found");
        return state;
      } else {
        return {
          ...state,
          routes: [
            ...state.routes.slice(0, index),
            action.payload,
            ...state.routes.slice(index + 1)
          ]
        };
      }

    default:
      return state;
  }
};
