import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
}

export default Search;