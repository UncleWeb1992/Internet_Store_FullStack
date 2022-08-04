import React from "react";
import { Link } from "react-router-dom";

const ProductsMenu = () => {
  const products = ["Суши-роллы", "Сеты", "Горячее", "Десерты", "Напитки"];
  const images = [
    "./img/products/rolls/Filadelfiya_mandarin.jpg",
    "./img/products/sets/set3.jpg",
    "./img/products/hot/hot3.jpg",
    "./img/products/deserts/desert4.jpg",
    "./img/products/drink/drink7.jpg",
  ];

  const links = ["/roll", "/set", "/hot", "/desert", "/drink"];
  return (
    <div className="products__menu">
      <div className="container">
        <h1 className="menu__title">Меню</h1>
        <div className="menu__products">
          <ul className="menu__products--list">
            {products.map((prod, i) => (
              <li className="menu__products--item" key={prod}>
                <Link to={links[i]}>
                  <img src={images[i]} alt="menu_images" />
                  <div className="item__hover">
                    <h3>{prod}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
