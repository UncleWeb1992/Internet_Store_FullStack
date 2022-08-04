import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "../../coomon/form/textField";
import SelectField from "../../coomon/form/selectField";
import FileField from "../../coomon/form/fileField";
import { useDispatch } from "react-redux";
import { validator } from "../../../utils/validator";
import { updateProducts } from "../../../store/products";
import ProductService from "../../../services/products.service";

const initialState = {
  name: "",
  cost: "",
  Ingredients: "",
  img: "",
  description: "",
};

const EditProductForm = ({ data, setEditor }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data || initialState);
  const [errors, setErrors] = useState({});

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
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const product = { ...formData, _id: data._id };

    if (typeof product.img === "string") {
      dispatch(updateProducts(product));
    } else {
      const form = new FormData();
      form.append("data", formData.img);
      try {
        const image = await ProductService.sendImg(form);
        if (image) {
          dispatch(updateProducts({ ...formData, img: image }));
        }
      } catch (error) {
        const { message } = error.response.data.error;
        setErrors(message);
      }
    }

    setEditor(null);
  };
  if (data) {
    return (
      <div className="form__wrapper">
        <div className="close__form" onClick={() => setEditor(null)}></div>
        <form className="form dashboard__form" onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "20px" }}>Обновление продукта</h3>
          <TextField
            placeHolder="Название продукта"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            placeHolder="Стоимость"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
          <TextField
            placeHolder="Ингридиенты (использовать разделитель)"
            name="Ingredients"
            value={formData.Ingredients}
            onChange={handleChange}
          />
          <SelectField
            name="description"
            options={productsCategories}
            classname="form__select"
            defaultvalue={formData.description}
            onChange={handleChange}
          />
          <FileField onChange={handleChange} name="img" error={errors.img} />

          <button className="btn btn__dashboard-edit" disabled={!isValid}>
            Обновить продукт
          </button>
        </form>
      </div>
    );
  } else return "";
};

EditProductForm.propTypes = {
  data: PropTypes.object,
  setEditor: PropTypes.func,
};

export default EditProductForm;
