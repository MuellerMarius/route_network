import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  onlyEurope: false,
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

  function loadData(data) {
    dispatch({
      type: "LOAD_DATA",
      payload: data
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        onlyEurope: state.onlyEurope,
        routes: state.routes,
        changeProjection,
        loadData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
