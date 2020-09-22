import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalState';
import Flight from './Flight';

const Routes = ({ dimensions }) => {
  const { routes, lightTheme, categories } = useContext(GlobalContext);
  const activeCatNames = categories
    .filter((cat) => cat.active === true)
    .map((cat) => cat.name);

  return (
    <>
      {routes
        .filter((route) => activeCatNames.includes(route.cat))
        .map((route) => (
          <Flight
            key={route.id}
            route={route}
            color={categories.find((cat) => cat.name === route.cat).color}
            lightTheme={lightTheme}
            dimensions={dimensions}
          />
        ))}
    </>
  );
};

export default Routes;

Routes.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
};
