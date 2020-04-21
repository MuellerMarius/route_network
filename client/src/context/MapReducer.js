import * as actionType from './actions';

export default (state, action) => {
  switch (action.type) {
    case actionType.TOGGLE_THEME:
      return {
        ...state,
        lightTheme: action.payload,
      };
    case actionType.TOGGLE_VIEW:
      return {
        ...state,
        focusViewOnEurope: action.payload,
      };
    case actionType.INIT_CATEGORIES:
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
    default:
      return state;
  }
};
