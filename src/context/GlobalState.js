import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import * as Cst from '../constants';

const initialState = {
  routes: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function loadRoutes(routes) {
    dispatch({
      type: Cst.LOAD_ROUTES,
      payload: routes,
    });
  }

  function addRoute(route) {
    dispatch({
      type: Cst.ADD_ROUTE,
      payload: route,
    });
  }

  function deleteRoute(id) {
    dispatch({
      type: Cst.DEL_ROUTE,
      payload: id,
    });
  }

  function editRoute(route) {
    dispatch({
      type: Cst.EDIT_ROUTE,
      payload: route,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
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
