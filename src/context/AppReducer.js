import * as Constants from "../constants";

export default (state, action) => {
  switch (action.type) {
    case Constants.LOAD_ROUTES:
      return {
        ...state,
        routes: action.payload
      };
    case Constants.ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.payload]
      };
    case Constants.DEL_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(route => route.id !== action.payload)
      };
    case Constants.EDIT_ROUTE:
      const index = state.routes.findIndex(
        route => route.id === action.payload.id
      );
      if (index === -1) {
        // TODO: Error handling
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
