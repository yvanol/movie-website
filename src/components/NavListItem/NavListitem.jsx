import React from "react";
import { NavLink } from "react-router-dom";

function NavListItem({ nav }) {
  return (
    <li>
      <NavLink
        to={nav.link}
        className={({ isActive }) => (isActive ? "active-link" : "")}
        end={nav.link === "/"} // exact match for home
      >
        {nav.name}
      </NavLink>
    </li>
  );
}

export default NavListItem;
