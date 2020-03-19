import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as Constants from "../constants";

const initialState = {
  onlyEurope: false,
  themeLight: true,
  routes: [
    {
      id: 0,
      from: "EDDF",
      fromCoordLat: 50.033333,
      fromCoordLong: 8.57055,
      to: "EDDM",
      toCoordLat: 48.353802,
      toCoordLong: 11.7861,
      cat: "PAX"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function changeProjection(onlyEurope) {
    dispatch({
      type: Constants.CHANGE_PROJECTION,
      payload: onlyEurope
    });
  }

  function changeTheme(themeLight) {
    dispatch({
      type: Constants.CHANGE_THEME,
      payload: themeLight
    });
  }

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
        onlyEurope: state.onlyEurope,
        routes: state.routes,
        themeLight: state.themeLight,
        changeProjection,
        changeTheme,
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
