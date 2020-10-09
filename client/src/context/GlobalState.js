import React, { createContext, useReducer, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';
import * as Cst from '../constants';
import * as actionType from './actions';

const initialState = {
  lightTheme: true,
  regionalFocus: false,
  showLabels: false,
  categories: [],
  routes: [],
};

const init = (initState) => {
  return JSON.parse(localStorage.getItem('appState')) || initState;
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    // Update categories
    const categorySet = [...new Set(state.routes.map((item) => item.cat))];
    dispatch({
      type: actionType.UPDATE_CATEGORIES,
      data: categorySet.map((entry, index) => {
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

  return (
    <GlobalContext.Provider
      value={{
        routes: state.routes,
        lightTheme: state.lightTheme,
        showLabels: state.showLabels,
        regionalFocus: state.regionalFocus,
        categories: state.categories,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = { children: PropTypes.element.isRequired };

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      'Element tries to access GlobalContext but is not within GlobalContext.Provider',
    );
  }
  return context;
};

export default useGlobalContext;
