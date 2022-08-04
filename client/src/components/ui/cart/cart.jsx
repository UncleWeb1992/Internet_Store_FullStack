import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountProductsInCart,
  getFullPriseAllProductCart,
  getProductInCart,
  clearCart,
} from "../../../store/cart";
import Modal from "../../coomon/modal";
import Order from "../order";
import CartProductList from "./cartProductList";

const Cart = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const cartProducts = useSelector(getProductInCart());
  const fullPriseCart = useSelector(getFullPriseAllProductCart());
  const cartLength = useSelector(getCountProductsInCart());

  const generateClass = () => {
    if (cartProducts.length > 0 && !active) {
      return "cart__inner active";
    }

    return "cart__inner";
  };

  const cartClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <img
        src="../../img/header/cart.png"
        alt="Корзина"
        className="cart__img"
      ></img>
      <span className="cart_count">{cartLength ? cartLength : 0}</span>
      <div className={generateClass()}>
        <CartProductList />
        <div className="cart__wrapper--down">
          <div className="cart__fullprise-wrapper">
            <p className="cart__fullprise-title">Сумма:</p>
            <span className="cart__fullprise">{fullPriseCart} ₽</span>
          </div>
          <button className="btn tocart" onClick={() => setActive(true)}>
            Оформить заказ
          </button>
        </div>
        <button className="cart__clear" onClick={cartClear}>
          очистить корзину
        </button>
      </div>
      {active && (
        <Modal active={active} setActive={setActive}>
          <Order />
        </Modal>
      )}
    </div>
  );
};

export default Cart;
