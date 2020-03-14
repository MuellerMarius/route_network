import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  onlyEurope: false,
  routes: [
    {
      id: 0,
      from: "EDDF",
      fromCoord: [8.570556, 50.033333],
      to: "EDDM",
      toCoord: [11.7861, 48.353802],
      cat: "PAX"
    },
    {
      id: 0,
      from: "EDDF",
      fromCoord: [8.570556, 50.033333],
      to: "EPKT",
      toCoord: [19.08, 50.4743],
      cat: "EMJ190"
    },
    {
      id: 0,
      from: "EBBR",
      fromCoord: [4.48443984985, 50.901401519800004],
      to: "EGLL",
      toCoord: [-0.461941, 51.4706],
      cat: "A320"
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

  return (
    <GlobalContext.Provider
      value={{
        onlyEurope: state.onlyEurope,
        routes: state.routes,
        changeProjection
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
