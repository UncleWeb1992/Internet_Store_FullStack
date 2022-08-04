import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProductToCart, getProductCartById } from "../../store/cart";
import AddComment from "./coments/addComment";
import CommentsList from "./coments/commentsList";
import Loader from "../coomon/loader";
import BradCrumbs from "../coomon/breadCrumbs";
import { getProductById } from "../../store/products";
import { getCommentsById } from "../../store/coments";
import { useAuth } from "../../hooks/useAuth";

const ProductInfo = () => {
  const dispath = useDispatch();
  const { id } = useParams();
  const { currentUser } = useAuth();
  const currentProductInCart = useSelector(getProductCartById(id));
  const currentProduct = useSelector(getProductById(id));
  const comments = useSelector(getCommentsById(id));

  const addToCart = (product) => {
    dispath(addProductToCart(product));
  };

  if (currentProduct) {
    const { Ingredients, cost, description, img, name } = currentProduct;

    const bradCrumbsPath = {
      "": { value: "Главная /", pathName: "/" },
      roll: { value: "Суши-Роллы /", pathName: "/roll" },
      set: { value: "Сеты /", pathName: "/set" },
      hot: { value: "Горячие блюда /", pathName: "/hot" },
      drink: { value: "Напитки /", pathName: "/drink" },
      desert: { value: "Десерты /", pathName: "/desert" },
      productInfo: { value: name },
    };

    return (
      <div className="container">
        <div className="product__info" data-id={id}>
          <div className="product__info--content">
            <BradCrumbs data={bradCrumbsPath} />
            <div className="product__info--image">
              <img
                src={img.includes("http") ? img : `../../${img}`}
                alt={name + "image"}
              />
            </div>
            <div className="product__info--title">{name}</div>
            <div className="product__info--desc">Категория: {description}</div>
            <div className="product__info--ingridients">
              <strong>Ингридиенты: </strong>
              {Ingredients}
            </div>
            <div className="product__info--footer">
              <span className="product__info--price">Цена : {cost}₽</span>
              <button
                id={id}
                className="btn btn--product__info"
                onClick={(e) => addToCart(currentProduct)}
                disabled={currentProductInCart}
              >
                В корзину
              </button>
            </div>
          </div>
          <div className="coments">
            {currentUser ? (
              <>
                <div className="add__coments">
                  <AddComment />
                </div>

                {comments ? <CommentsList data={comments} /> : ""}
              </>
            ) : (
              <div className="hide__comments">
                Оставлять комментарии могут только авторизованные пользователи
                <Link to="/signUp">Зарегистрироваться</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ProductInfo;
