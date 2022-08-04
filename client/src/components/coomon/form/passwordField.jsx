import React, { useState } from "react";

const PasswordField = ({ name, placeHolder, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPasword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="input__password">
      <input
        id={name}
        type={showPassword ? "text" : "password"}
        name={name}
        className="form__input password"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        style={!error ? { marginBottom: "20px" } : { marginBottom: "5px" }}
      />

      <button
        type="button"
        className="show--pass"
        onClick={toggleShowPasword}
      ></button>
      {error && <p className="form__error">{error}</p>}
    </div>
  );
};

export default PasswordField;
