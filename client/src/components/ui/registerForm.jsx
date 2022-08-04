import React, { useState, useEffect } from "react";
import TextField from "../coomon/form/textField";
import { validator } from "../../utils/validator";
import PasswordField from "../coomon/form/passwordField";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const initialState = { name: "", email: "", password: "" };

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialState || {});
  const [errors, setErrors] = useState({});
  const { signUp } = useAuth();
  const history = useHistory();

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const validatorConfig = {
    name: {
      isRequired: { message: "Имя обязательно для заполнения" },
      min: {
        message: "Имя должено состоять минимум из 3 символов",
        value: 3,
      },
    },
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Email введен не коректно" },
    },
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
      await signUp(formData);
      setFormData(initialState);
      history.push("/");
    } catch (err) {
      setErrors(err);
    }
  };
  return (
    <div className="container">
      <div className="reg__form">
        <h1>Регистрация</h1>
        <div className="reg__form--inner">
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              name="name"
              placeHolder="Имя"
              onChange={handleChange}
              value={formData.name}
              error={errors.name}
            />
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

            <button className="btn btn__form btn__reg" disabled={!isValid}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
