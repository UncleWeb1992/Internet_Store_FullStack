import React from "react";

const SearchField = ({ onChange }) => {
  return (
    <input
      type="text"
      className="navbar__search"
      placeholder="Введите название товара"
      onChange={onChange}
    />
  );
};

export default SearchField;
