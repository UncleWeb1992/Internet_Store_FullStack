import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };
  return (
    <>
      <input
        type="checkbox"
        className="form__checkbox"
        id={name}
        checked={value}
        onChange={handleChange}
      />
    </>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBoxField;
