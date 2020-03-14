import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  onlyEurope: false,
  routes: [
    { id: 0, from: "EDDF", to: "EDDM", cat: "PAX" },
    { id: 1, from: "EDDN", to: "EDDF", cat: "PAX" },
    { id: 3, from: "EDDN", to: "EDDF", cat: "EMJ190" },
    { id: 2, from: "EBBR", to: "EDDM", cat: "A320" }
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
