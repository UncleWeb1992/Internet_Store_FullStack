import React, { useState } from "react";
import { validator } from "../../../utils/validator";
import TextAreaField from "../../coomon/form/textAreaField";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { addComment } from "../../../store/coments";

const AddComment = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const { currentUser } = useAuth();

  const clearForm = () => {
    setData({});
    setErrors({});
  };

  const hadleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    content: {
      isRequired: { message: "Сообщение не может быть пустым" },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    clearForm();

    const comment = {
      ...data,
      created_at: Date.now(),
      pageId: String(params.id),
      userId: String(currentUser._id),
    };

    dispatch(addComment(comment));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextAreaField
        className="form-control"
        value={data.content || ""}
        onChange={hadleChange}
        name="content"
        label="Новый коментарий"
        error={errors.content}
      />

      <button className="btn btn__textarea">Опубликовать</button>
    </form>
  );
};

export default AddComment;
