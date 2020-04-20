import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import * as actionType from './actions';

const initialState = {
  dimensions: { width: window.innerWidth, height: window.innerHeight },
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

  function loadRoutes(routes) {
    dispatch({
      type: actionType.LOAD_ROUTES,
      payload: routes,
    });
  }

  function addRoute(route) {
    dispatch({
      type: actionType.ADD_ROUTE,
      payload: route,
    });
  }

  function deleteRoute(id) {
    dispatch({
      type: actionType.DEL_ROUTE,
      payload: id,
    });
  }

  function editRoute(route) {
    dispatch({
      type: actionType.EDIT_ROUTE,
      payload: route,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        windowDimensions: state.dimensions,
        routes: state.routes,
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
