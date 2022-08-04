import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { filter } from "../../utils/filterForCategiries";
import { handleScroll } from "../../utils/scrollUp";
import PropTypes from "prop-types";
import _ from "lodash";
import Categories from "../ui/categories";
import Product from "../ui/product";
import Loader from "../coomon/loader";

const ProductsPage = ({ title, data, loadingStatus, search }) => {
  const location = useLocation().pathname;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState(null);

  const locationShowForProducts =
    location === "/roll" ||
    location === "/set" ||
    location === "/hot" ||
    location === "/desert" ||
    location === "/drink";

  useEffect(() => {
    setFilteredProducts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchedRoll =
      search &&
      data.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );
    setSearchedProducts(searchedRoll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (locationShowForProducts) {
    handleScroll();
  }

  const hendleScrolToTop = () => {
    // eslint-disable-next-line no-restricted-globals
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSort = (value) => {
    let filtered;
    if (value === "asc") {
      filtered = _.orderBy(filteredProducts, ["cost"], ["asc"]);
      setFilteredProducts(filtered);
    } else {
      filtered = _.orderBy(filteredProducts, ["cost"], ["desc"]);
      setFilteredProducts(filtered);
    }
    setSorted((prevState) => !prevState);
  };

  const currentFilter = (title) => {
    const filters = filter(title, data);
    setFilteredProducts(...filters);
  };

  const products = searchedProducts || filteredProducts;

  return (
    <div className="container">
      {location === "/roll" && <Categories currentFilter={currentFilter} />}

      <div className="products__wrapper">
        <div className="products__header">
          <h2 className="title">{title}</h2>
          <div className="sorted">
            <div
              className="sorted__title"
              onClick={() => setSorted((prevState) => !prevState)}
            >
              Сортировать по:
            </div>
            <ul className={"sorted__list" + (!sorted ? " hide" : "")}>
              <li className="sorted__item" onClick={() => handleSort("desc")}>
                Убыванию цены
              </li>
              <li className="sorted__item" onClick={() => handleSort("asc")}>
                Возрастанию цены
              </li>
            </ul>
          </div>
        </div>

        {!loadingStatus ? (
          <ul className="products__list">
            {products?.map((product) => (
              <Product key={product._id} {...product} />
            ))}
          </ul>
        ) : (
          <Loader />
        )}
        <div className="scrollUp hide" onClick={hendleScrolToTop}></div>
      </div>
    </div>
  );
};

ProductsPage.propTypes = {
  title: PropTypes.string,
  loadingStatus: PropTypes.bool,
  data: PropTypes.array,
  search: PropTypes.string,
};

export default ProductsPage;
