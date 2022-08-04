import React from "react";
import FilterLink from "./filter";
// import { filter } from "../../utils/filterForCategiries";

const Categories = ({ currentFilter }) => {
  const categoryes = [
    "Все роллы",
    "Классические Роллы",
    "Филадельфия",
    "Горячие Роллы",
    "Тортилья",
    "Запеченные Роллы",
    "Суши",
  ];

  return (
    <div className="categories__group">
      <ul className="products__filter filter__list">
        {categoryes.map((category, index) => (
          <FilterLink
            title={category}
            key={index}
            data={categoryes}
            currentFilter={currentFilter}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
