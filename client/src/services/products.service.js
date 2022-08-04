import { httpService } from "./http.service";

const productsEndPoint = "/products";

const ProductService = {
  getProducts: async () => {
    try {
      const { data } = await httpService.get(productsEndPoint);
      const formatProd = data.map((prod) => ({
        ...prod,
        count: 1,
      }));
      return formatProd;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },

  addProduct: async (payload) => {
    try {
      const product = { data: { ...payload } };
      const { data } = await httpService.post(productsEndPoint, product);
      return data;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },

  sendImg: async (payload) => {
    try {
      const { data } = await httpService.post(
        productsEndPoint + "/images",
        payload
      );

      return data;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },

  getProductById: async (id) => {
    try {
      const { data } = await httpService.get(productsEndPoint);
      const product = data.find((prod) => prod._id === id);
      return product;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },

  updatedProduct: async (payload) => {
    try {
      const { data } = await httpService.patch(
        productsEndPoint + `/${payload._id}`,
        payload
      );
      return data;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },

  removedProduct: async (id) => {
    try {
      await httpService.delete(productsEndPoint + `/${id}`);
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },
};

export default ProductService;
