import * as actionType from './actions';

export default (state, action) => {
  switch (action.type) {
    case actionType.LOAD_ROUTES:
      return {
        ...state,
        routes: action.data,
      };
    case actionType.ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.data],
      };
    case actionType.DEL_ROUTE:
      return {
        ...state,
        routes: state.routes.filter((route) => route.id !== action.data),
      };
    case actionType.EDIT_ROUTE:
      return {
        ...state,
        routes: state.routes.map((route) =>
          route.id === action.data.id ? action.data : route,
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
        lightTheme: action.data,
      };
    case actionType.TOGGLE_LABELS:
      return {
        ...state,
        showLabels: action.data,
      };
    case actionType.TOGGLE_VIEW:
      return {
        ...state,
        regionalFocus: action.data,
      };
    case actionType.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };
    case actionType.TOGGLE_CAT_DISPLAY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.name === action.data.name
            ? { ...category, active: action.data.checked }
            : category,
        ),
      };
    case actionType.CHANGE_CAT_COLOR:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.name === action.data.name
            ? { ...category, color: action.data.color }
            : category,
        ),
      };
    default:
      return state;
  }
};
