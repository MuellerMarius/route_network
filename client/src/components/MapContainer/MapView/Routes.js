import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { MapViewContext } from '../../../context/MapViewState';
import Flight from './Flight';

export default function Routes() {
  const { lightTheme, categories } = useContext(MapViewContext);
  const { routes } = useContext(GlobalContext);
  const activeCatNames = categories
    .filter((cat) => cat.active === true)
    .map((cat) => cat.name);

  return (
    <React.Fragment>
      {routes
        .filter((route) => activeCatNames.includes(route.cat))
        .map((route) => (
          <Flight
            key={route.id}
            route={route}
            category={categories.find((cat) => cat.name === route.cat)}
            lightTheme={lightTheme}
          />
        ))}
      }
    </React.Fragment>
  );
}
