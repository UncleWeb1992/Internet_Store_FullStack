import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localsStorage.Service";

const initialState = {
  entities: localStorageService.getLocalStorageCartProducts() || null,
  error: null,
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cartAddProduct: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }

      state.entities.push(action.payload);
    },
    cartRequestFiled: (state, action) => {
      state.error = action.payload;
    },
    cartPlusProduct: (state, action) => {
      state.entities[
        state.entities.findIndex((prod) => prod._id === action.payload)
      ].count += 1;
    },
    cartMinusProduct: (state, action) => {
      state.entities[
        state.entities.findIndex((prod) => prod._id === action.payload)
      ].count -= 1;
    },
    cartDeletedProduct: (state, action) => {
      state.entities = state.entities.filter(
        (prod) => prod._id !== action.payload
      );
    },
    cartBaddeleted: (state, action) => {
      state.error = action.payload;
    },
    cartClear: (state) => {
      state.entities = null;
    },
  },
});

const { reducer: cartReducer, actions } = cartSlice;
const {
  cartAddProduct,
  cartRequestFiled,
  cartDeletedProduct,
  cartBaddeleted,
  cartPlusProduct,
  cartMinusProduct,
  cartClear,
} = actions;

export const addProductToCart = (product) => async (dispatch, getState) => {
  if (product) {
    const transformProduct = { ...product, cost: Number(product.cost) };
    dispatch(cartAddProduct(transformProduct));
    localStorageService.addProductsToCart(getState().cart.entities);
  } else {
    dispatch(cartRequestFiled("product enable"));
  }
};

export const getProductInCart = () => (state) =>
  state.cart.entities ? state.cart.entities : [];

export const getFullPriseAllProductCart = () => (state) =>
  state.cart.entities &&
  state.cart.entities.reduce((acc, prod) => acc + prod.cost * prod.count, 0);

export const getCountProductsInCart = () => (state) => {
  if (state.cart.entities) {
    const cartAllCounts = state.cart.entities.reduce(
      (acc, prod) => acc + 1 * Number(prod.count),
      0
    );
    return cartAllCounts;
  }
};

export const getProductCartById = (id) => (state) =>
  state.cart.entities && state.cart.entities.find((p) => p._id === id);

export const plusProductCount = (id) => (dispatch, getState) => {
  dispatch(cartPlusProduct(id));
  localStorageService.updateLocalStorageCartProducts(getState().cart.entities);
};

export const minusProductInCount = (id) => (dispatch, getState) => {
  dispatch(cartMinusProduct(id));
  localStorageService.updateLocalStorageCartProducts(getState().cart.entities);
};

export const clearCart = () => (dispatch) => {
  dispatch(cartClear());
  localStorageService.removeLocalStorageCartProducts();
};

export const getCountProduct = (id) => (state) =>
  state.cart.entities[state.cart.entities.findIndex((prod) => prod._id === id)]
    .count;

export const deleteProductCartById = (id) => (dispatch, getState) => {
  const indexDeletedProductIn = getState().cart.entities.findIndex(
    (prod) => prod._id === id
  );

  if (indexDeletedProductIn >= 0) {
    dispatch(cartDeletedProduct(id));
    localStorageService.updateLocalStorageCartProducts(
      getState().cart.entities
    );
  } else {
    dispatch(cartBaddeleted(`product by id ${id} not found`));
  }
};

export default cartReducer;
