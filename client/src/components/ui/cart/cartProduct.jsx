import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  getCountProduct,
  plusProductCount,
  minusProductInCount,
} from "../../../store/cart";

const CartProduct = ({ _id, name, cost, img, onDelete }) => {
  const dispatch = useDispatch();
  const countProduct = useSelector(getCountProduct(_id));

  const plusProductInCart = (id) => {
    dispatch(plusProductCount(id));
  };

  const minusProductInCart = () => {
    if (countProduct > 1) {
      dispatch(minusProductInCount(_id));
    } else {
      onDelete(_id);
    }
  };

  return (
    <>
      <li className="cart__products-list ">
        <article className="cart__products" data-id={_id}>
          <img
            src={img.includes("http") ? img : "../../" + img}
            alt="roll"
            className="cart__products--img"
          />
          <div className="cart__wrapper">
            <div className="products__discriptions">
              <p className="cart__discription">{name}</p>
              <p className="cart__prise">{cost} ₽</p>
            </div>
            <div className="cart__add-products">
              <div
                className="minus__prod"
                onClick={() => minusProductInCart(_id)}
              ></div>
              <span className="count__prod">{countProduct}</span>
              <div
                className="plus__prod"
                onClick={() => plusProductInCart(_id)}
              ></div>
            </div>
            <div
              onClick={() => onDelete(_id)}
              className="cart__products--del"
            ></div>
          </div>
        </article>
      </li>
    </>
  );
};

CartProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.string,
  onDelete: PropTypes.func,
};

export default CartProduct;
