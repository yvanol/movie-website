import React from "react";
import { Link } from "react-router-dom";  // import Link for logo
import NavListItem from "../../components/NavListItem/NavListitem"; // exact casing
import Search from "../../components/Search/Search";
import navListData from "../../data/navListData";
import './header.css';
import '../../components/NavListItem/navListitem.css';
import Button from "../../components/Button/Button";

function Header() {
  return (
    <header>
      {/* Use Link instead of <a> for SPA navigation */}
      <Link to="/" className="logo">
        Cinema
      </Link>

      <ul className="nav">
        {navListData.map(nav => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>

      <Search />
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign In' />
    </header>
  );
}

export default Header;
