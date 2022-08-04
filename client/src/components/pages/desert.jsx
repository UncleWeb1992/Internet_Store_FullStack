import React from "react";
import { useSelector } from "react-redux";
import {
  getProductsList,
  getProductsLoadedStatus,
  getSearchedProductss,
} from "../../store/products";
import Loader from "../coomon/loader";
import ProductPage from "./productPage";

const Desert = () => {
  const productsList = useSelector(getProductsList());
  const searchedAllProductsValue = useSelector(getSearchedProductss());
  const isLoading = useSelector(getProductsLoadedStatus());

  if (!isLoading) {
    const DesertList = productsList.filter((prod) =>
      prod.description.includes("Десерт")
    );

    return (
      <ProductPage
        data={DesertList}
        title="Сеты"
        search={searchedAllProductsValue}
        loadingStatus={isLoading}
      />
    );
  } else return <Loader />;
};

export default Desert;
