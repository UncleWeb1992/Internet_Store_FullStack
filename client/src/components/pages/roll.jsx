import React from "react";
import { useSelector } from "react-redux";
import {
  getProductsList,
  getProductsLoadedStatus,
  getSearchedProductss,
} from "../../store/products";
import Loader from "../coomon/loader";

import ProductsPage from "./productPage";

const Roll = () => {
  const productsList = useSelector(getProductsList());
  const searchedAllProductsValue = useSelector(getSearchedProductss());
  const isLoading = useSelector(getProductsLoadedStatus());

  const rollClassic =
    !isLoading &&
    productsList.filter((prod) => prod.description.includes("Рол"));

  const rollFila =
    !isLoading &&
    productsList.filter((prod) => prod.description.includes("Филадельфия"));

  const rollTortiliya =
    !isLoading &&
    productsList.filter((prod) => prod.description.includes("Тортилья"));

  const rollSushi =
    !isLoading &&
    productsList.filter((prod) => prod.description.includes("Суши"));

  const rollList = !isLoading && [
    ...rollClassic,
    ...rollFila,
    ...rollTortiliya,
    ...rollSushi,
  ];

  if (!isLoading) {
    return (
      <ProductsPage
        data={rollList}
        search={searchedAllProductsValue}
        loadingStatus={isLoading}
        title="Суши-Роллы"
      />
    );
  } else {
    return <Loader />;
  }
};

export default Roll;
