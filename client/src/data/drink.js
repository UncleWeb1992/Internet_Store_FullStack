const Drink = [
  {
    id: 0,
    name: "Лимонад Мята и лимон",
    img: "./img/products/drink/drink1.jpg",
    cost: 115,
    description: "Напитки",
    Ingredients:
      "Сочный лимон и свежая мята отлично витаминизируют и поднимают настроение. Бодрящий взрыв вкуса.",
  },
  {
    id: 1,
    name: "Морс Вишнёвый глинтвейн",
    img: "./img/products/drink/drink2.jpg",
    cost: 115,
    description: "Напитки",
    Ingredients:
      "Можно пить как холодным, так и горячим. Просто разогрейте в микроволновке. А если добавить немного красного вина, то получится настоящий глинтвейн.",
  },
  {
    id: 2,
    name: "Вода без газа",
    img: "./img/products/drink/drink3.jpg",
    cost: 75,
    description: "Напитки",
    Ingredients: "",
  },
  {
    id: 3,
    name: "Вода с газом",
    img: "./img/products/drink/drink4.jpg",
    cost: 75,
    description: "Напитки",
    Ingredients: "",
  },
  {
    id: 4,
    name: "Натуральная газировка Вишня",
    img: "./img/products/drink/drink5.jpg",
    cost: 115,
    description: "Напитки",
    Ingredients:
      "Освежающий газированный напиток из настоящих фруктов с натуральным подсластителем. Пейте охлажденным.",
  },
  {
    id: 5,
    name: "Натуральная газировка Цитру",
    img: "./img/products/drink/drink6.jpg",
    cost: 115,
    description: "Напитки",
    Ingredients:
      "Освежающий газированный напиток из настоящих фруктов с натуральным подсластителем. Пейте охлажденным.",
  },
  {
    id: 6,
    name: "Морс Вишня и мята",
    img: "./img/products/drink/drink7.jpg",
    cost: 115,
    description: "Напитки",
    Ingredients:
      "Освежающая мята дополняет сочную вишню, придавая любимому вкусу душистый аромат.",
  },
  {
    id: 7,
    name: "Морс Облепиха, имбирь и мёд",
    img: "./img/products/drink/drink8.jpg",
    cost: 115,
    description: "Напитки",
    Ingredients:
      "Яркое сочетание облепихи и пряного имбиря с приятной медовой сладостью быстро активизирует ваш иммунитет.",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(Drink);
    }, 1000);
  });

export default fetchAll;
