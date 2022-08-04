import React from "react";
import { useSelector } from "react-redux";
import {
  getProductsList,
  getProductsLoadedStatus,
  getSearchedProductss,
} from "../../store/products";
import Loader from "../coomon/loader";
import ProductPage from "./productPage";

const Set = () => {
  const productsList = useSelector(getProductsList());
  const searchedAllProductsValue = useSelector(getSearchedProductss());
  const isLoading = useSelector(getProductsLoadedStatus());

  if (!isLoading) {
    const setList = productsList.filter((prod) =>
      prod.description.includes("Сеты")
    );

    return (
      <ProductPage
        data={setList}
        title="Сеты"
        search={searchedAllProductsValue}
        loadingStatus={isLoading}
      />
    );
  } else return <Loader />;
};

export default Set;
