import * as Cst from '../constants';

export default (state, action) => {
  switch (action.type) {
    case Cst.TOGGLE_THEME:
      return {
        ...state,
        lightTheme: action.payload,
      };
    case Cst.TOGGLE_VIEW:
      return {
        ...state,
        focusViewOnEurope: action.payload,
      };
    case Cst.INIT_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case Cst.TOGGLE_CAT_DISPLAY:
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
