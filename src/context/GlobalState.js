import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

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
      type: "CHANGE_PROJECTION",
      payload: onlyEurope
    });
  }

  function changeTheme(themeLight) {
    dispatch({
      type: "CHANGE_THEME",
      payload: themeLight
    });
  }

  function loadData(data) {
    dispatch({
      type: "LOAD_DATA",
      payload: data
    });
  }

  function addRoute(route) {
    dispatch({
      type: "ADD_ROUTE",
      payload: route
    });
  }

  function deleteRoute(id) {
    dispatch({
      type: "DELETE_ROUTE",
      payload: id
    });
  }

  function editRoute(route) {
    dispatch({
      type: "EDIT_ROUTE",
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
        loadData,
        addRoute,
        deleteRoute,
        editRoute
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
