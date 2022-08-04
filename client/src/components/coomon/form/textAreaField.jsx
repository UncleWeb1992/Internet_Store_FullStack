import React from "react";

const TextAreaField = ({ label, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="textarea">
      <label htmlFor={name} className="textarea__label">
        {" "}
        {label}
      </label>
      <div className="textarea__content">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          rows="3"
        />
        {error && <div className="form__error">{error}</div>}
      </div>
    </div>
  );
};

TextAreaField.defaultProps = {
  type: "text",
};

export default TextAreaField;
