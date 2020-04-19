import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Menu() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        activeClassName="nav-item--active"
        className="nav-item"
      >
        Data Edit
      </NavLink>

      <NavLink
        to="/map"
        activeClassName="nav-item--active"
        className="nav-item"
      >
        Map Display
      </NavLink>
    </nav>
  );
}
