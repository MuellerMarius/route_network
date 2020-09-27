import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-simple-maps';
import { GlobalContext } from '../../../context/GlobalState';
import AirportMarker from './AirportMarker';
import * as Cst from '../../../constants';

const getAirportsFromRoutes = (routes) => {
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

  // remove duplicate fields
  airports = airports.filter(
    (elem, i, self) => self.findIndex((elem2) => elem2.id === elem.id) === i,
  );

  return airports;
};

const filterActiveRoutes = (routes, categories) => {
  const activeCategories = categories
    .filter((cat) => cat.active === true)
    .map((cat) => cat.name);

  return routes.filter((route) => activeCategories.includes(route.cat));
};

const Routes = ({ dimensions, setTooltip }) => {
  const { routes, lightTheme, categories, showLabels } = useContext(
    GlobalContext,
  );
  const activeRoutes = filterActiveRoutes(routes, categories);
  const airports = getAirportsFromRoutes(activeRoutes);
  const strokeWidth =
    dimensions.width > Cst.screenXlWidth
      ? Cst.strokeWidthXl
      : dimensions.width > Cst.screenLgWidth
      ? Cst.strokeWidthLg
      : Cst.strokeWidthSm;

  return (
    <>
      {activeRoutes.map((route) => (
        <Line
          key={route.id}
          from={[route.fromCoordLong, route.fromCoordLat]}
          to={[route.toCoordLong, route.toCoordLat]}
          stroke={categories.find((cat) => cat.name === route.cat).color}
          strokeWidth={strokeWidth}
        />
      ))}
      {airports.map((airport) => (
        <AirportMarker
          key={airport.id}
          airport={airport}
          lightTheme={lightTheme}
          setTooltip={setTooltip}
          strokeWidth={strokeWidth}
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
