import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalState';
import Flight from './Flight';
import Airport from './Airport';

const airportsFromRoutes = (routes) => {
  let airports = [];
  routes.forEach((elem) => {
    airports.push({
      id: elem.to,
      coord: [elem.toCoordLong, elem.toCoordLat],
    });
    airports.push({
      id: elem.from,
      coord: [elem.fromCoordLong, elem.fromCoordLat],
    });
  });

  // only keep unique elements
  airports = airports.filter(
    (elem, i, self) => self.findIndex((elem2) => elem2.id === elem.id) === i
  );

  return airports;
};

const Routes = ({ dimensions, setTooltip }) => {
  const { routes, lightTheme, categories, showLabels } = useContext(
    GlobalContext
  );
  const activeCatNames = categories
    .filter((cat) => cat.active === true)
    .map((cat) => cat.name);
  const activeRoutes = routes.filter((route) =>
    activeCatNames.includes(route.cat)
  );
  const airports = airportsFromRoutes(activeRoutes);

  return (
    <>
      {activeRoutes.map((route) => (
        <Flight
          key={route.id}
          route={route}
          color={categories.find((cat) => cat.name === route.cat).color}
          dimensions={dimensions}
        />
      ))}
      {airports.map((airport) => (
        <Airport
          key={airport.id}
          airport={airport}
          lightTheme={lightTheme}
          setTooltip={setTooltip}
          dimensions={dimensions}
          showLabels={showLabels}
        />
      ))}
    </>
  );
};

export default React.memo(Routes);

Routes.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
  setTooltip: PropTypes.func.isRequired,
};
