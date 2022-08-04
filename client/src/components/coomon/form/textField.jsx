import React from "react";
import PropTypes from "prop-types";

const TextField = ({ name, placeHolder, value, onChange, error, type }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <>
      <input
        id={name}
        type={type}
        name={name}
        className="form__input"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        style={!error ? { marginBottom: "20px" } : { marginBottom: "5px" }}
      />
      {error && <p className="form__error">{error}</p>}
    </>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
};

export default TextField;
