import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import * as actionType from './actions';

const initialState = {
  dimensions: { width: window.innerWidth, height: window.innerHeight },
  lightTheme: true,
  focusViewOnEurope: false,
  categories: [],
  routes: [],
};

function debounce(func, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      func.apply(this, arguments);
    }, ms);
  };
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const handleResize = debounce(function onResize() {
      dispatch({
        type: actionType.HANDLE_RESIZE,
        payload: { height: window.innerHeight, width: window.innerWidth },
      });
    }, 500);
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    updateCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.routes]);

  const toggleTheme = (lightTheme) => {
    dispatch({
      type: actionType.TOGGLE_THEME,
      payload: lightTheme,
    });
  };

  const toggleView = (focusViewOnEurope) => {
    dispatch({
      type: actionType.TOGGLE_VIEW,
      payload: focusViewOnEurope,
    });
  };

  const updateCategories = () => {
    let categorySet = [...new Set(state.routes.map((item) => item.cat))];
    dispatch({
      type: actionType.INIT_CATEGORIES,
      payload: categorySet.map((entry, index) => {
        const oldCat = state.categories.find((cat) => cat.name === entry);
        return {
          name: entry,
          active: oldCat ? oldCat.active : true,
          index,
        };
      }),
    });
  };

  const toggleCatDisplay = (name, checked) => {
    dispatch({
      type: actionType.TOGGLE_CAT_DISPLAY,
      payload: { name, checked },
    });
  };

  const loadRoutes = (routes) => {
    dispatch({
      type: actionType.LOAD_ROUTES,
      payload: routes,
    });
  };

  const addRoute = (route) => {
    dispatch({
      type: actionType.ADD_ROUTE,
      payload: route,
    });
  };

  const deleteRoute = (id) => {
    dispatch({
      type: actionType.DEL_ROUTE,
      payload: id,
    });
  };

  const editRoute = (route) => {
    dispatch({
      type: actionType.EDIT_ROUTE,
      payload: route,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        windowDimensions: state.dimensions,
        routes: state.routes,
        lightTheme: state.lightTheme,
        focusViewOnEurope: state.focusViewOnEurope,
        categories: state.categories,
        toggleTheme,
        toggleView,
        toggleCatDisplay,
        loadRoutes,
        addRoute,
        deleteRoute,
        editRoute,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
