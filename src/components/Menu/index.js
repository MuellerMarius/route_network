import React from 'react';
import { NavLink } from 'react-router-dom';
import github_logo from './GitHub-Mark-64px.png';
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
      <div class="nav-icon__wrapper">
        <a
          href="https://github.com/MuellerMarius/route_network"
          title="GitHub Repository"
        >
          <img src={github_logo} className="nav-icon__image" alt="GitHub" />
        </a>
      </div>
    </nav>
  );
}
