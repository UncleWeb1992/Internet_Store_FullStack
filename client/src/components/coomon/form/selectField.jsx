import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  name,
  options,
  defaultvalue,
  classname,
  onChange,
  error,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <>
      <select
        id={name}
        name={name}
        className={classname}
        onChange={handleChange}
      >
        <option
          disabled={defaultvalue === "Выберите категорию"}
          value={defaultvalue}
        >
          {defaultvalue}
        </option>
        {options &&
          options.map((o, index) => (
            <option key={index} value={o.name}>
              {o}
            </option>
          ))}
      </select>
      {error && <p className="form__error">{error}</p>}
    </>
  );
};

SelectField.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  defaultvalue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default SelectField;
