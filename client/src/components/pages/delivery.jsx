import React from "react";

const Delivery = () => {
  return (
    <div className="container">
      <div className="delivery">
        <h1>Условия доставки</h1>
        <ul className="delivery__list">
          <li className="delivery__item">По городу доставка 100₽</li>
          <li className="delivery__item">За чертой города (10км) 200₽</li>
          <li className="delivery__item">За чертой города (20км) 400₽</li>
          <li className="delivery__item">За чертой города (30км) 600₽</li>
          <li className="delivery__item">При самовывозе скидка 10%</li>
        </ul>
      </div>
    </div>
  );
};

// 56.83250272607559, 60.603156375904845

export default Delivery;
