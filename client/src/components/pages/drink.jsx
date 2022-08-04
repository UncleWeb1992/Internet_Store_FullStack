import React from "react";
import { useSelector } from "react-redux";
import {
  getProductsList,
  getProductsLoadedStatus,
  getSearchedProductss,
} from "../../store/products";
import Loader from "../coomon/loader";
import ProductPage from "./productPage";

const Drink = () => {
  const productsList = useSelector(getProductsList());
  const searchedAllProductsValue = useSelector(getSearchedProductss());
  const isLoading = useSelector(getProductsLoadedStatus());

  if (!isLoading) {
    const DrinkList = productsList.filter((prod) =>
      prod.description.includes("Напитки")
    );

    return (
      <ProductPage
        data={DrinkList}
        title="Сеты"
        search={searchedAllProductsValue}
        loadingStatus={isLoading}
      />
    );
  } else return <Loader />;
};

export default Drink;
