import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Cart from "./cart/cart";
import "simplebar/dist/simplebar.min.css";
import SearchField from "../coomon/form/searchField";
import { searchProducts } from "../../store/products";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const dispacth = useDispatch();
  const { currentUser } = useAuth();
  const location = useLocation().pathname;

  const showDashBoard = currentUser && currentUser.admin;

  const locationShowForProducts =
    location === "/roll" ||
    location === "/set" ||
    location === "/hot" ||
    location === "/desert" ||
    location === "/drink";

  const productsSearch = ({ target }) => {
    dispacth(searchProducts(target.value));
  };

  const navBarLinks = [
    { title: "Главная", path: "/" },
    { title: "Суши-Роллы", path: "/roll" },
    { title: "Сеты", path: "/set" },
    { title: "Горячее", path: "/hot" },
    { title: "Десерты", path: "/desert" },
    { title: "Напитки", path: "/drink" },
    { title: "Условия доставки", path: "/delivery" },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_inner">
          <nav className="nav navbar_nav">
            <ul className="nav_list navbar_list">
              {navBarLinks.map((item) => (
                <li className="nav_item" key={item.title}>
                  <Link to={item.path} className="nav_link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {!locationShowForProducts && showDashBoard ? (
            <Link to="/dashboard" className="dashboard__link">
              Админ панель
            </Link>
          ) : null}

          {locationShowForProducts && <SearchField onChange={productsSearch} />}

          <Cart />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
