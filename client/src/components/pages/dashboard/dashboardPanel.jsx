import React, { useState } from "react";
import PropTypes from "prop-types";
import CreateProductForm from "./createProductForm";
import EditProductForm from "./editProductForm";

const DashBoardPanel = ({
  handleSearch,
  editorProduct,
  setEditorProduct,
  onChangeCategori,
  value,
}) => {
  const [addProd, setAddProd] = useState(null);
  const categories = [
    "Все продукты",
    "Суши-Роллы",
    "Сеты",
    "Горячие блюда",
    "Десерты",
    "Напитки",
  ];
  return (
    <div className="dashboard__panel">
      <h2>Управленние данными</h2>
      <input
        type="search"
        onChange={handleSearch}
        className="dashboard__search"
        placeholder="Поиск продукта по названию"
        value={value}
      />

      <ul className="dashboard__categories">
        {categories.map((cat) => (
          <li key={cat} onClick={() => onChangeCategori(cat)}>
            {cat}
          </li>
        ))}
      </ul>

      {addProd !== null && <CreateProductForm setAddProd={setAddProd} />}

      {editorProduct !== null && (
        <EditProductForm data={editorProduct} setEditor={setEditorProduct} />
      )}

      {!addProd && (
        <button
          className="btn btn--create"
          title="Добавить продукт"
          onClick={() => {
            setAddProd(true);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

DashBoardPanel.propTypes = {
  handleSearch: PropTypes.func,
  editorProduct: PropTypes.object,
  setEditorProduct: PropTypes.func,
  value: PropTypes.string,
};

export default DashBoardPanel;
