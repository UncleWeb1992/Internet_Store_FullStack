const Deserts = [
  {
    id: 0,
    name: "Макарун Фисташка",
    img: "./img/products/deserts/desert1.jpg",
    cost: 99,
    description: "Десерты",
    Ingredients: "",
  },
  {
    id: 1,
    name: "Макарун Малина",
    img: "./img/products/deserts/desert2.jpg",
    cost: 99,
    description: "Десерты",
    Ingredients: "",
  },
  {
    id: 2,
    name: "Макарун Солёная карамель",
    img: "./img/products/deserts/desert3.jpg",
    cost: 99,
    description: "Десерты",
    Ingredients: "",
  },
  {
    id: 3,
    name: "Пирожное Тирамису",
    img: "./img/products/deserts/desert4.jpg",
    cost: 259,
    description: "Десерты",
    Ingredients: "Классический итальянский десерт.",
  },
  {
    id: 4,
    name: "Пирожное Намелака",
    img: "./img/products/deserts/desert5.jpg",
    cost: 299,
    description: "Десерты",
    Ingredients: "Хрустящий шоколадный десерт с нежным кремом Намелака",
  },
  {
    id: 5,
    name: "Пирожное Клубничный чизкейк",
    img: "./img/products/deserts/desert6.jpg",
    cost: 135,
    description: "Десерты",
    Ingredients: "Ягодно-сливочное сочетание.",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(Deserts);
    }, 1000);
  });

export default fetchAll;
