import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as Constants from "../constants";

const initialState = {
  routes: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function loadRoutes(routes) {
    dispatch({
      type: Constants.LOAD_ROUTES,
      payload: routes
    });
  }

  function addRoute(route) {
    dispatch({
      type: Constants.ADD_ROUTE,
      payload: route
    });
  }

  function deleteRoute(id) {
    dispatch({
      type: Constants.DEL_ROUTE,
      payload: id
    });
  }

  function editRoute(route) {
    dispatch({
      type: Constants.EDIT_ROUTE,
      payload: route
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        routes: state.routes,
        loadRoutes,
        addRoute,
        deleteRoute,
        editRoute
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
