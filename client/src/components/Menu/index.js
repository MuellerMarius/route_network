import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import './style.scss';

const Menu = () => {
  const { lightTheme } = useContext(GlobalContext);
  return (
    <nav>
      <NavLink
        exact
        to="/"
        activeClassName="nav-item--active"
        className="nav-item"
        data-cy="dataEditRoute"
      >
        Data Edit
      </NavLink>

      <NavLink
        to="/map"
        activeClassName={`nav-item--active${!lightTheme ? '-dark' : ''}`}
        className="nav-item"
        data-cy="mapDisplayRoute"
      >
        Map Display
      </NavLink>
      <div className="nav-icon__wrapper">
        <a
          href="https://github.com/MuellerMarius/route_network"
          title="GitHub Repository"
        >
          <img
            src="./GitHub-Mark-64px.png"
            className="nav-icon__image"
            alt="GitHub"
          />
        </a>
      </div>
    </nav>
  );
};

export default Menu;
