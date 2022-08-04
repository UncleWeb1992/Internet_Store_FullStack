import React from "react";
import PropTypes from "prop-types";

const FileField = ({ name, onChange, error }) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange({ name: name, value: e.target.files[0] });

    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   onChange({ name: name, value: e.target.result });
    // };
    // reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <div className="label__file">
        <input
          id={name}
          type="file"
          className="form__file"
          accept=".png, .jpg"
          onChange={handleChange}
          name={name}
        />
        Выбрать фото
      </div>
      {error && (
        <p
          style={{
            color: "red",
            marginLeft: "-120px",
            padding: "0",
            marginTop: "-14px",
            fontSize: "12px",
          }}
        >
          {error}
        </p>
      )}
    </>
  );
};

FileField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default FileField;
