const ProductsModel = require("../models/Products");
const rollProductsMock = require("../mock/products/roll.json");
const setProductsMock = require("../mock/products/sets.json");
const hotProductsMock = require("../mock/products/hot.json");
const desertProductsMock = require("../mock/products/deserts.json");
const drinkProductsMock = require("../mock/products/drink.json");

module.exports = async () => {
  const products = await ProductsModel.find();

  const allProducts = [
    ...rollProductsMock,
    ...setProductsMock,
    ...hotProductsMock,
    ...desertProductsMock,
    ...drinkProductsMock,
  ];

  if (products.length !== allProducts.length) {
    await createInitialEntity(ProductsModel, allProducts);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item.id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
