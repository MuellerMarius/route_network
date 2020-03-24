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
      return {
        ...state,
        routes: state.routes.map(route =>
          route.id === action.payload.id ? action.payload : route
        )
      };
    default:
      return state;
  }
};
