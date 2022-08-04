import React, { useState, useEffect } from "react";
import CartProductList from "./cart/cartProductList";
import withProductList from "../../HOC/withProductList";
import SimpleBar from "simplebar-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getFullPriseAllProductCart } from "../../store/cart";

const Order = () => {
  const dispatch = useDispatch();
  const ComponentwithProductList = withProductList(CartProductList);
  const isLengthProducts = ComponentwithProductList().length;
  const fullPrice = useSelector(getFullPriseAllProductCart());
  const [fullPriceOrder, setFullPriceOrder] = useState(fullPrice);
  const [sale, setSale] = useState(false);
  const [finishPay, setFinishPay] = useState(false);

  const [sauces, setSauces] = useState([
    { id: 1, name: "Соевый соус", count: 1 },
    { id: 2, name: "Соус Терияки", count: 0 },
    { id: 3, name: "Кисло-сладкий", count: 0 },
    { id: 4, name: "Васаби", count: 1 },
    { id: 5, name: "Имбирь", count: 1 },
  ]);

  useEffect(() => {
    setFullPriceOrder(fullPrice);
    if (fullPrice >= 3000) {
      setSale((fullPrice / 100) * 20);
    } else {
      setSale(false);
    }
  }, [fullPrice]);

  const orderPay = () => {
    setFinishPay(true);
    dispatch(clearCart());
  };

  const sauceCounter = ({ target }) => {
    const el = target.closest("li").querySelectorAll("span")[0].textContent;
    if (target.className === "sauces__plus") {
      const newSouces = sauces.map((s) => ({
        ...(s.name === el && s.count < 7 ? (s.count += 1) : s.count),
        ...s,
      }));
      setSauces(newSouces);
      if (allSauce > 3) {
        setFullPriceOrder((prevState) => prevState + 30);
      }
    } else {
      const newSouces = sauces.map((s) => ({
        ...(s.name === el && s.count > 0 ? (s.count -= 1) : s.count),
        ...s,
      }));
      setSauces(newSouces);
      if (allSauce > 4) {
        setFullPriceOrder((prevState) => prevState - 30);
      }
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const allSauce = sauces.reduce((a, s) => a + s.count, 0);

  if (isLengthProducts && !finishPay) {
    return (
      <div className="order">
        <h1 className="order__title">Ваш заказ</h1>
        <ul className="order--product__list">
          <SimpleBar style={{ maxHeight: "300px" }}>
            <ComponentwithProductList className="order--product__item" />
          </SimpleBar>
        </ul>
        <div className="sauces">
          <h2>Добавить соус</h2>

          <ul className="sauces__list">
            {sauces.map((s) => (
              <li key={s.id}>
                <span>{s.name}</span>
                <div className="sauces__counter">
                  <button
                    className="sauces__minus"
                    onClick={sauceCounter}
                  ></button>
                  <span>{s.count}</span>
                  <button
                    className="sauces__plus"
                    onClick={sauceCounter}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="sale__info" style={{ textAlign: "center" }}>
          <strong>Примечание: </strong>
          <span>при заказе от 3000 рублей скидка 20%</span>
        </div>

        <div className="order__footer">
          <div className="order__footer--prices">
            <p>Итоговая цена {fullPriceOrder}₽</p>
            <span>{sale ? `Скидка ${sale}₽` : ""}</span>
          </div>
          <div className="btns--order">
            <button className="btn order__btn" onClick={orderPay}>
              Заказать
            </button>
            <button onClick={handleClearCart} className="order--clear__button">
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
    );
  } else if (finishPay) {
    return <div className="order">Спасибо за заказ</div>;
  } else {
    return (
      <div className="order">
        <h1 className="order__title">Ваша корзина пуста</h1>
      </div>
    );
  }
};

export default Order;
