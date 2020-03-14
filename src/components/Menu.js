import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        activeClassName="nav-item active"
        className="nav-item"
      >
        Data Input
      </NavLink>
      <NavLink to="/map" activeClassName="nav-item active" className="nav-item">
        Map Display
      </NavLink>
    </nav>
  );
}
