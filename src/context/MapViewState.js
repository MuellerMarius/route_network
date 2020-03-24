import React, { createContext, useReducer } from "react";
import MapReducer from "./MapReducer";
import * as Constants from "../constants";

const initialState = {
  lightTheme: true,
  focusViewOnEurope: false,
  categories: []
};

export const MapViewContext = createContext(initialState);

export const MapViewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MapReducer, initialState);

  function toggleTheme(lightTheme) {
    dispatch({
      type: Constants.TOGGLE_THEME,
      payload: lightTheme
    });
  }

  function toggleView(focusViewOnEurope) {
    dispatch({
      type: Constants.TOGGLE_VIEW,
      payload: focusViewOnEurope
    });
  }

  function initCategories(routes) {
    let categorySet = [...new Set(routes.map(item => item.cat))];

    dispatch({
      type: Constants.INIT_CATEGORIES,
      payload: categorySet.map((entry, index) => ({
        name: entry,
        active: true,
        index
      }))
    });
  }

  function toggleCatDisplay(name, checked) {
    dispatch({
      type: Constants.TOGGLE_CAT_DISPLAY,
      payload: { name, checked }
    });
  }

  return (
    <MapViewContext.Provider
      value={{
        lightTheme: state.lightTheme,
        focusViewOnEurope: state.focusViewOnEurope,
        categories: state.categories,
        toggleTheme,
        toggleView,
        initCategories,
        toggleCatDisplay
      }}
    >
      {children}
    </MapViewContext.Provider>
  );
};
