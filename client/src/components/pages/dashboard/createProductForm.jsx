import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";
import TextField from "../../coomon/form/textField";
import SelectField from "../../coomon/form/selectField";
import FileField from "../../coomon/form/fileField";
import { createProduct } from "../../../store/products";
import ProductService from "../../../services/products.service";

const CreateProductForm = ({ setAddProd }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    Ingredients: "",
    img: "",
    description: "",
  });
  const productsCategories = [
    "Суши-Роллы",
    "Сеты",
    "Горячее",
    "Десерты",
    "Напитки",
  ];

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const validatorConfig = {
    name: {
      isRequired: { message: "Поле обязательно для заполнения" },
    },
    cost: {
      isRequired: { message: "Поле обязательно для заполнения" },
      onleyNum: { message: "Цена может состоять только из цифр" },
    },
    Ingredients: {
      isRequired: { message: "Поле обязательно для заполнения" },
    },
    img: {
      isRequired: { message: "Картинка не может быть пустой" },
    },
    description: {
      isRequired: { message: "Поле обязательно для заполнения" },
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
    const isValid = validate();
    if (!isValid) return;
    e.preventDefault();
    setAddProd(null);
    const form = new FormData();
    form.append("data", formData.img);
    try {
      const image = await ProductService.sendImg(form);
      if (image) {
        dispatch(createProduct({ ...formData, img: image }));
      }
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <div className="form__wrapper">
      <div className="close__form" onClick={() => setAddProd(null)}></div>
      <form
        action="form"
        className="form dashboard__form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <h3 style={{ marginBottom: "20px" }}>Добавление продукта</h3>
        <TextField
          placeHolder="Название продукта"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <TextField
          placeHolder="Стоимость"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          error={errors.cost}
        />
        <TextField
          placeHolder="Ингридиенты (использовать разделитель)"
          name="Ingredients"
          value={formData.Ingredients}
          onChange={handleChange}
          error={errors.Ingredients}
        />
        <SelectField
          name="description"
          options={productsCategories}
          classname="form__select"
          defaultvalue="Выберите категорию"
          onChange={handleChange}
          error={errors.description}
        />
        <FileField onChange={handleChange} name="img" error={errors.img} />

        <button className="btn btn__dashboard-create" disabled={!isValid}>
          Добавить продукт
        </button>
      </form>
    </div>
  );
};

CreateProductForm.propTypes = {
  setAddProd: PropTypes.func,
};

export default CreateProductForm;
