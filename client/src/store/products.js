import { createSlice } from "@reduxjs/toolkit";
import ProductService from "../services/products.service";

const initialState = {
  entities: null,
  error: null,
  isLoading: true,
  search: null,
  dataLoaded: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true;
    },
    productsRecived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    productsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    },
    productCreate: (state, action) => {
      state.entities.push(action.payload);
    },
    productsUpdate: (state, action) => {
      state.entities[
        state.entities.findIndex((prod) => prod._id === action.payload._id)
      ] = action.payload;
    },
    productsSearched: (state, action) => {
      state.search = action.payload;
    },
    productRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (prod) => prod._id !== action.payload
      );
    },
  },
});

const { reducer: productsReducer, actions } = productsSlice;

const {
  productsRequested,
  productsRecived,
  productsRequestFiled,
  productsUpdate,
  productsSearched,
  productRemoved,
  productCreate,
} = actions;

export const loadProductsList = () => async (dispatch) => {
  dispatch(productsRequested());
  try {
    const data = await ProductService.getProducts();
    const products = data.map((p) => ({ ...p, cost: Number(p.cost) }));
    dispatch(productsRecived(products));
  } catch (error) {
    dispatch(productsRequestFiled(error.message));
  }
};

export const searchProducts = (value) => (dispatch) => {
  if (value !== "") {
    dispatch(productsSearched(value));
  } else {
    dispatch(productsSearched(null));
  }
};

export const getSearchedProductss = () => (state) =>
  state.products.search && state.products.search;

export const getProductsLoadedStatus = () => (state) =>
  state.products.isLoading;

export const getProductById = (id) => (state) =>
  state.products.entities &&
  state.products.entities.find((prod) => prod._id === id);

export const updateProducts = (payload) => async (dispatch) => {
  try {
    const updateProduct = await ProductService.updatedProduct(payload);
    dispatch(
      productsUpdate({
        ...updateProduct,
        cost: Number(updateProduct.cost),
        count: 1,
      })
    );
  } catch (error) {
    dispatch(productsRequestFiled(error.message));
  }
};

export const createProduct = (payload) => async (dispatch) => {
  try {
    const newProduct = await ProductService.addProduct(payload);
    dispatch(
      productCreate({ ...newProduct, cost: Number(newProduct.cost), count: 1 })
    );
  } catch (error) {
    dispatch(productsRequestFiled(error.message));
  }
};

export const removedProduct = (id) => async (dispatch) => {
  try {
    await ProductService.removedProduct(id);
    dispatch(productRemoved(id));
  } catch (error) {
    dispatch(productsRequestFiled(error.message));
  }
};

export const getProductsList = () => (state) =>
  state.products.entities && state.products.entities;

export default productsReducer;
