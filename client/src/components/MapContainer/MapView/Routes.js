import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import Flight from './Flight';

export default function Routes({ dimensions }) {
  const { routes, lightTheme, categories } = useContext(GlobalContext);
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
            dimensions={dimensions}
          />
        ))}
    </React.Fragment>
  );
}
