const Sets = [
  {
    id: 0,
    name: "Сет 5 роллов и 6 вкусов",
    img: "./img/products/sets/set1.jpg",
    cost: 979,
    description: "Сеты",
    Ingredients:
      "Микс Филадельфия 3/4 и Конопатый, Зоя сидит дома, Сливочный с курицей, Сливочный с огурцом, Хрустящий с цыпленком V.2.0",
  },
  {
    id: 1,
    name: "Сет 7 роллов и 9 вкусов",
    img: "./img/products/sets/set2.jpg",
    cost: 1699,
    description: "Сеты",
    Ingredients:
      "микс угорь, лосось и авокадо, с хрустящим лососем, Унаги, Зою пустили на кухню V.2.0, сливочный с огурцом, Хрустящий с цыпленком V.2.0, Темпура.",
  },
  {
    id: 2,
    name: "Сет на любой вкус V.4.0",
    img: "./img/products/sets/set3.jpg",
    cost: 1099,
    description: "Сеты",
    Ingredients:
      "с рубленым лососем, с омлетом, вегетарианский, Зоя сидит дома, Грин ролл V.2.0.",
  },
  {
    id: 3,
    name: "Сет из 4 роллов с темпурой",
    img: "./img/products/sets/set4.jpg",
    cost: 1250,
    description: "Сеты",
    Ingredients:
      "Зоя сидит дома, Темпура, хрустящий с цыпленком V.2.0, сливочный с огурцом.",
  },
  {
    id: 4,
    name: "Сет из 5 роллов",
    img: "./img/products/sets/set5.jpg",
    cost: 1280,
    description: "Сеты",
    Ingredients:
      "Хрустящий с цыпленком, Темпура, с рубленым лососем, Зоя сидит дома, сливочный с огурцом.",
  },
  {
    id: 5,
    name: "Сет Много и недорого V.2.0",
    img: "./img/products/sets/set6.jpg",
    cost: 790,
    description: "Сеты",
    Ingredients:
      "Ролл сливочный с авокадо, ролл сливочный с лососем, ролл сливочный с огурцом, ролл с водорослями чука.",
  },
  {
    id: 6,
    name: "Сет из 3 роллов",
    img: "./img/products/sets/set7.jpg",
    cost: 1180,
    description: "Сеты",
    Ingredients:
      "Тортилья маки с курицей гриль, конопатый, сливочный с огурцом.",
  },
  {
    id: 7,
    name: "Сет из 4 роллов и Филадельфии 3/4",
    img: "./img/products/sets/set8.jpg",
    cost: 1860,
    description: "Сеты",
    Ingredients:
      "Филадельфия 3/4, Тортилья маки с курицей гриль, Хрустящий с цыпленком V.2.0, Зоя сидит дома, Грин ролл.",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(Sets);
    }, 1000);
  });

export default fetchAll;