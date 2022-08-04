import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, getProductCartById } from "../../store/cart";
import PropTypes from "prop-types";

const Product = (product) => {
  const { _id, img, name, cost, description, Ingredients } = product;
  const dispatch = useDispatch();
  const location = useLocation();
  const addToCart = (prod) => {
    dispatch(addProductToCart(prod));
  };

  const currentProduct = useSelector(getProductCartById(_id));

  return (
    <li className="products" data-id={_id} data-class={description}>
      <Link to={location.pathname + `/productInfo/${_id}`}>
        <div className="products__image">
          <img
            src={img.includes("http") ? img : "../" + img}
            alt={name + "image"}
            className="products__img"
          />
        </div>
      </Link>

      <div className="products__inner">
        <h2 className="products__title">{name}</h2>
        <span className="products__prise">{cost}₽</span>
        <button
          id={_id}
          className="products__btn btn"
          onClick={() => addToCart(product)}
          disabled={currentProduct}
        >
          в корзину
        </button>
      </div>
      <span className="products__discription">{Ingredients}</span>
      <h3 className="products__classes">{description}</h3>
    </li>
  );
};

Product.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Product;
