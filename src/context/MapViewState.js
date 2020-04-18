import React, { createContext, useReducer, useCallback } from 'react';
import MapReducer from './MapReducer';
import * as Cst from '../constants';

const initialState = {
  lightTheme: true,
  focusViewOnEurope: false,
  categories: [],
};

export const MapViewContext = createContext(initialState);

export const MapViewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MapReducer, initialState);

  const toggleTheme = (lightTheme) => {
    dispatch({
      type: Cst.TOGGLE_THEME,
      payload: lightTheme,
    });
  };

  const toggleView = (focusViewOnEurope) => {
    dispatch({
      type: Cst.TOGGLE_VIEW,
      payload: focusViewOnEurope,
    });
  };

  const initCategories = useCallback((routes) => {
    let categorySet = [...new Set(routes.map((item) => item.cat))];

    dispatch({
      type: Cst.INIT_CATEGORIES,
      payload: categorySet.map((entry, index) => ({
        name: entry,
        active: true,
        index,
      })),
    });
  }, []);

  const toggleCatDisplay = (name, checked) => {
    dispatch({
      type: Cst.TOGGLE_CAT_DISPLAY,
      payload: { name, checked },
    });
  };

  return (
    <MapViewContext.Provider
      value={{
        lightTheme: state.lightTheme,
        focusViewOnEurope: state.focusViewOnEurope,
        categories: state.categories,
        toggleTheme,
        toggleView,
        initCategories,
        toggleCatDisplay,
      }}
    >
      {children}
    </MapViewContext.Provider>
  );
};
