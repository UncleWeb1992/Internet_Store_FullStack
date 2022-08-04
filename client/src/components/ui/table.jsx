import React from "react";
import PropTypes from "prop-types";

const Table = ({ data, onEdit, onRemove }) => {
  const tableHeadersColumn = [
    "id",
    "Наименование",
    "Фото",
    "Цена",
    "Категория",
    "Редактирование",
  ];

  const tableHeaderStyled = (target) => {
    switch (target) {
      case "id":
        return { minWidth: "265px" };
      case "Наименование":
        return { minWidth: "205px" };
      case "Фото":
        return { minWidth: "416px" };
      case "Категория":
        return { minWidth: "150px" };
      default:
        return null;
    }
  };
  return (
    <table className="dashboard__table">
      <thead className="table__header">
        <tr>
          {tableHeadersColumn.map((cat) => (
            <th
              key={cat}
              scope="col"
              className="table__col"
              style={tableHeaderStyled(cat)}
            >
              {cat}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((prod) => (
          <tr key={prod._id}>
            {Object.keys(prod)
              .filter(
                (element) => element !== "count" && element !== "Ingredients"
              )
              .map((el) => (
                <td key={el}>{prod[el]}</td>
              ))}
            <td>
              <div className="edit__block">
                <img
                  src="./img/edit.svg"
                  alt="edit__icon"
                  className="edit--product"
                  onClick={() => onEdit(prod)}
                />
                <img
                  src="./img/delete.svg"
                  alt="delete__icon"
                  className="delete--product"
                  onClick={() => onRemove(prod._id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Table;
