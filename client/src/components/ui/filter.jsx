import React from "react";

const FilterLink = ({ title, currentFilter }) => {
  return (
    <li className="filter__item" onClick={(e) => currentFilter(title)}>
      {title}
    </li>
  );
};

export default FilterLink;
