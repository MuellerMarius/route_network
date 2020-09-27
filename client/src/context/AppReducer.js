import * as actionType from './actions';

export default (state, action) => {
  switch (action.type) {
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
    case actionType.CLEAR_ROUTES:
      return {
        ...state,
        categories: [],
        routes: [],
      };
    case actionType.TOGGLE_THEME:
      return {
        ...state,
        lightTheme: action.payload,
      };
    case actionType.TOGGLE_LABELS:
      return {
        ...state,
        showLabels: action.payload,
      };
    case actionType.TOGGLE_VIEW:
      return {
        ...state,
        regionalFocus: action.payload,
      };
    case actionType.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actionType.TOGGLE_CAT_DISPLAY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.name === action.payload.name
            ? { ...category, active: action.payload.checked }
            : category
        ),
      };
    case actionType.CHANGE_CAT_COLOR:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.name === action.payload.name
            ? { ...category, color: action.payload.color }
            : category
        ),
      };
    default:
      return state;
  }
};
