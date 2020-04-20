import * as actionType from './actions';

export default (state, action) => {
  switch (action.type) {
    case actionType.HANDLE_RESIZE:
      return {
        ...state,
        dimensions: action.payload,
      };
    case actionType.LOAD_ROUTES:
      return {
        ...state,
        routes: action.payload,
      };
    case actionType.ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.payload],
      };
    case actionType.DEL_ROUTE:
      return {
        ...state,
        routes: state.routes.filter((route) => route.id !== action.payload),
      };
    case actionType.EDIT_ROUTE:
      return {
        ...state,
        routes: state.routes.map((route) =>
          route.id === action.payload.id ? action.payload : route
        ),
      };
    default:
      return state;
  }
};
