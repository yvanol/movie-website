import React from "react";

function FilterListItem({ filter, active, onClick }) {
  return (
    <li
      className={active ? "active" : ""}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {filter.name}
    </li>
  );
}


export default FilterListItem;
