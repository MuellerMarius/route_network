import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';
import * as Cst from '../constants';
import * as actionType from './actions';

const initialState = {
  lightTheme: true,
  regionalFocus: false,
  categories: [],
  routes: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const localState = JSON.parse(localStorage.getItem('appState'));
  const [state, dispatch] = useReducer(AppReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    // Update categories
    const categorySet = [...new Set(state.routes.map((item) => item.cat))];
    dispatch({
      type: actionType.UPDATE_CATEGORIES,
      payload: categorySet.map((entry, index) => {
        const oldCat = state.categories.find((cat) => cat.name === entry);
        return {
          name: entry,
          active: oldCat ? oldCat.active : true,
          color: oldCat ? oldCat.color : Cst.defaultFlightColors[index],
          index,
        };
      }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.routes, JSON.stringify(state.categories)]);

  const toggleTheme = (lightTheme) => {
    dispatch({
      type: actionType.TOGGLE_THEME,
      payload: lightTheme,
    });
  };

  const toggleView = (regionalFocus) => {
    dispatch({
      type: actionType.TOGGLE_VIEW,
      payload: regionalFocus,
    });
  };

  const toggleCatDisplay = (name, checked) => {
    dispatch({
      type: actionType.TOGGLE_CAT_DISPLAY,
      payload: { name, checked },
    });
  };

  const changeCatColor = (name, color) => {
    dispatch({
      type: actionType.CHANGE_CAT_COLOR,
      payload: { name, color },
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

  const clearRoutes = () => {
    dispatch({ type: actionType.CLEAR_ROUTES });
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
        routes: state.routes,
        lightTheme: state.lightTheme,
        regionalFocus: state.regionalFocus,
        categories: state.categories,
        toggleTheme,
        toggleView,
        toggleCatDisplay,
        changeCatColor,
        loadRoutes,
        addRoute,
        deleteRoute,
        clearRoutes,
        editRoute,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = { children: PropTypes.element.isRequired };
