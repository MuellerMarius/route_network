import * as Cst from '../constants';

export default (state, action) => {
  switch (action.type) {
    case Cst.LOAD_ROUTES:
      return {
        ...state,
        routes: action.payload,
      };
    case Cst.ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.payload],
      };
    case Cst.DEL_ROUTE:
      return {
        ...state,
        routes: state.routes.filter((route) => route.id !== action.payload),
      };
    case Cst.EDIT_ROUTE:
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
