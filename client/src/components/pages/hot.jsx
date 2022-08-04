import React from "react";
import { useSelector } from "react-redux";
import {
  getProductsList,
  getProductsLoadedStatus,
  getSearchedProductss,
} from "../../store/products";
import Loader from "../coomon/loader";
import ProductPage from "./productPage";

const Hot = () => {
  const productsList = useSelector(getProductsList());
  const searchedAllProductsValue = useSelector(getSearchedProductss());
  const isLoading = useSelector(getProductsLoadedStatus());

  if (!isLoading) {
    const hotList = productsList.filter((prod) =>
      prod.description.includes("Горячие блюда")
    );

    return (
      <ProductPage
        data={hotList}
        title="Сеты"
        search={searchedAllProductsValue}
        loadingStatus={isLoading}
      />
    );
  } else return <Loader />;
};

export default Hot;
