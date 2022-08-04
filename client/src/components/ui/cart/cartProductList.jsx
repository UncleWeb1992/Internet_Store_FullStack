import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductCartById, getProductInCart } from "../../../store/cart";
import SimpleBar from "simplebar-react";
import CartProduct from "./cartProduct";

const CartProductList = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(getProductInCart());

  const onDeleteProductById = (id) => {
    dispatch(deleteProductCartById(id));
  };

  if (cartProducts) {
    return (
      <ul className="cart__products--item" data-simplebar>
        <SimpleBar style={{ maxHeight: 230 }}>
          {cartProducts.map((cartProd, index) => (
            <CartProduct
              key={index}
              {...cartProd}
              onDelete={() => onDeleteProductById(cartProd._id)}
            />
          ))}
        </SimpleBar>
      </ul>
    );
  }
};

export default CartProductList;
