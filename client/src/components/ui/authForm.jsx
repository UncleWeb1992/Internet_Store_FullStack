import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "../coomon/form/textField";
import { validator } from "../../utils/validator";
import { useAuth } from "../../hooks/useAuth";
import PasswordField from "../coomon/form/passwordField";
const initialState = { email: "", password: "" };

const AuthForm = ({ setActive }) => {
  const [formData, setFormData] = useState(initialState || {});
  const [errors, setErrors] = useState({});
  const { signIn } = useAuth();

  const closeModal = () => {
    setActive(false);
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const validatorConfig = {
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapitalSymbol: {
        message: "Пароль должен содержать минимум одну заглавную букву",
      },
      isContentsDigit: {
        message: "Пароль должен содержать минимум одну цифру",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Email введен не коректно" },
    },
  };

  const validate = () => {
    const errors = validator(formData, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (target) => {
    setFormData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    try {
      await signIn(formData);
      closeModal();
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <div className="auth__form">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeHolder="Email"
          onChange={handleChange}
          error={errors.email}
          value={formData.email}
        />
        <PasswordField
          name="password"
          placeHolder="Пароль"
          onChange={handleChange}
          error={errors.password}
          value={formData.password}
        />
        <div className="btns">
          <button className="btn btn__form" disabled={!isValid}>
            Войти
          </button>
          <Link to="/signUp" className="link__signup" onClick={closeModal}>
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
