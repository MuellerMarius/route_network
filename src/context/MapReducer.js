import * as Constants from "../constants";

export default (state, action) => {
  switch (action.type) {
    case Constants.TOGGLE_THEME:
      return {
        ...state,
        lightTheme: action.payload
      };
    case Constants.TOGGLE_VIEW:
      return {
        ...state,
        focusViewOnEurope: action.payload
      };
    case Constants.INIT_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case Constants.TOGGLE_CAT_DISPLAY:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.name === action.payload.name
            ? { ...category, active: action.payload.checked }
            : category
        )
      };
    default:
      return state;
  }
};
