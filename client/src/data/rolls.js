const Rolls = [
  {
    id: 0,
    name: "Каппа Маки (120гр.)",
    img: "./img/products/rolls/kappa-makich.jpg",
    cost: 90,
    description: "Классические Роллы",
    Ingredients: "Ролл со свежим огурчиком и кунжутом",
  },
  {
    id: 1,
    name: "Сякe Маки (120гр.)",
    img: "./img/products/rolls/Syake_maki2_new.jpg",
    cost: 190,
    description: "Классические Роллы",
    Ingredients: "Ролл с лососем",
  },
  {
    id: 2,
    name: "Авокадо Маки (120гр.)",
    img: "./img/products/rolls/Avokado_maki_new.jpg",
    cost: 150,
    description: "Классические Роллы",
    Ingredients: "Ролл с авокадо",
  },
  {
    id: 3,
    name: "Эби Маки (120гр.)",
    img: "./img/products/rolls/Ebi_maki_new.jpg",
    cost: 250,
    description: "Классические Роллы",
    Ingredients: "Ролл с тигровой креветкой",
  },
  {
    id: 4,
    name: "Унаги-Маки (120 гр.)",
    img: "./img/products/rolls/Unagi_maki1_new.jpg",
    cost: 280,
    description: "Классические Роллы",
    Ingredients: "Ролл с копченным угрем, унаги соусом и кунжутом",
  },
  {
    id: 5,
    name: "Небраска (200гр.)",
    img: "./img/products/rolls/nebraska.jpg",
    cost: 320,
    description: "Классические Роллы",
    Ingredients: "Жареный лосось • сливочный сыр • зеленый лук • кунжут",
  },
  {
    id: 6,
    name: "Чиз (220гр.)",
    img: "./img/products/rolls/Chiz.jpg",
    cost: 180,
    description: "Классические Роллы",
    Ingredients: "Сыр чеддер • сливочный сыр • огурец",
  },
  {
    id: 7,
    name: "Батакон-фрай (250гр.)",
    img: "./img/products/rolls/batakon_fray.jpg",
    cost: 360,
    description: "Классические Роллы",
    Ingredients:
      "Рис • бекон • сырный замес (сыр пармезан, сыр гауда, укроп, чеснок и майонез)перец болгарский",
  },
  {
    id: 8,
    name: "Ролл с тигровой креветкой (200гр.)",
    img: "./img/products/rolls/batakon_fray.jpg",
    cost: 350,
    description: "Горячие Роллы",
    Ingredients: "Рис • нори • тигровые креветки • сливочный сыр • огурец",
  },
  {
    id: 9,
    name: "Филадельфия классическая (220гр.)",
    img: "./img/products/rolls/Filadelfiya_class.jpg",
    cost: 470,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось",
  },
  {
    id: 10,
    name: "Филадельфия лайт (220гр.)",
    img: "./img/products/rolls/filadelfiya_lait01.jpg",
    cost: 280,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • огурец",
  },
  {
    id: 11,
    name: "Филадельфия с огурцом (220гр.)",
    img: "./img/products/rolls/filadelfiya_lait01.jpg",
    cost: 390,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • огурец",
  },
  {
    id: 12,
    name: "Филадельфия с мандарином (220гр.)",
    img: "./img/products/rolls/Filadelfiya_mandarin.jpg",
    cost: 400,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • мандарин",
  },
  {
    id: 13,
    name: "Филадельфия с креветкой (230гр.)",
    img: "./img/products/rolls/Filadelfiya_krevetulya.jpg",
    cost: 500,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • кревека",
  },
  {
    id: 14,
    name: "Филадельфия с авокадо (220гр.)",
    img: "./img/products/rolls/Filadelfiya_avokado_new.jpg",
    cost: 420,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • авокадо",
  },
  {
    id: 15,
    name: "Грин-ролл (220гр.)",
    img: "./img/products/rolls/green-roll.jpg",
    cost: 230,
    description: "Классические Роллы",
    Ingredients:
      "Свежий огурчик • сливочный сыр • кура копченая • перец Болгарский",
  },
  {
    id: 16,
    name: "Филадельфия-темпура (280гр.)",
    img: "./img/products/rolls/filadelfiya_tempura.jpg",
    cost: 530,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • кляр",
  },
  {
    id: 17,
    name: "Филадельфия запеченая (250гр.)",
    img: "./img/products/rolls/Filadelfiya_avokado_new.jpg",
    cost: 570,
    description: "Филадельфия",
    Ingredients: "Сливочный сыр • лосось • соус масаго",
  },
  {
    id: 18,
    name: "Тортилья с беконом (150гр.)",
    img: "./img/products/rolls/tortilya_bekon2.0.jpg",
    cost: 220,
    description: "Тортилья",
    Ingredients:
      "Лепешка тортилья • бекон • сливочный сыр • перец болгарский • лист салата",
  },
  {
    id: 19,
    name: "Тортилья с курицей (150гр.)",
    img: "./img/products/rolls/tortilya_kurica2.0.jpg",
    cost: 200,
    description: "Тортилья",
    Ingredients:
      "Лепешка тортилья • кура копченая • сливочный сыр томат • огурец • лист салата",
  },
  {
    id: 20,
    name: "Тортилья с лососем (150гр.)",
    img: "./img/products/rolls/tortilya_losos.jpg",
    cost: 200,
    description: "Тортилья",
    Ingredients:
      "Лепешка тортилья • лосось • сливочный сыр лук зеленый • томат",
  },
  {
    id: 21,
    name: "Горячая Тортилья с беконом (160гр.)",
    img: "./img/products/rolls/Gor_tort_s_bekon_2.0.jpg",
    cost: 240,
    description: "Горячие Роллы",
    Ingredients:
      "Лепешка тортилья • бекон • сливочный сыр перец • кляр • сухари",
  },
  {
    id: 22,
    name: "Горячая Тортилья с курицей (170гр.)",
    img: "./img/products/rolls/tortilya_frie_kurica2.0.jpg",
    cost: 220,
    description: "Горячие Роллы",
    Ingredients:
      "Лепешка тортилья • кура копченая • сливочный сыр томат • кляр • сухари",
  },
  {
    id: 23,
    name: "Горячая Тортилья с лососем (170гр.)",
    img: "./img/products/rolls/Gor_tort_losos_2.0.jpg",
    cost: 330,
    description: "Горячие Роллы",
    Ingredients:
      "Лепешка тортилья • лосось • сливочный сыр лук зеленый • томат • кляр • сухари",
  },
  {
    id: 24,
    name: "Ролл Карай темпура (220гр.)",
    img: "./img/products/rolls/Karay_tempura.jpg",
    cost: 350,
    description: "Горячие Роллы",
    Ingredients:
      "Нори • рис • креветка • лосось • огурец • сливочный сыр соус спайс • кляр",
  },
  {
    id: 25,
    name: "Ролл Темпура Футо Маки (200гр.)",
    img: "./img/products/rolls/Futo_maki.jpg",
    cost: 350,
    description: "Горячие Роллы",
    Ingredients:
      "Нори • рис • тунец • лосось • сливочный сыр пекинская капуста • сухари",
  },
  {
    id: 26,
    name: "Ролл Темпура Сит (210гр.)",
    img: "./img/products/rolls/tempura_sit_new.jpg",
    cost: 350,
    description: "Горячие Роллы",
    Ingredients:
      "Нори • рис • лосось • угорь копченый • сливочный сыр авокадо • кляр",
  },
  {
    id: 27,
    name: "Ролл Темпура Якудза (220гр.)",
    img: "./img/products/rolls/tempura_yakudza_new.jpg",
    cost: 320,
    description: "Горячие Роллы",
    Ingredients:
      "Нори • рис • лосось • бекон • томат • перец болгарский сливочный сыр • соус спайс • сухари",
  },
  {
    id: 28,
    name: "Ролл Темпура Русский (200гр.)",
    img: "./img/products/rolls/tempura_russkiy2.0.jpg",
    cost: 290,
    description: "Горячие Роллы",
    Ingredients:
      "Нори • рис • капченая курица • бекон • перец болгарский • сливочный сыр • кляр",
  },
  {
    id: 29,
    name: "Калифорния с лососем (230гр.)",
    img: "./img/products/rolls/californiya_losos_new.jpg",
    cost: 400,
    description: "Классические Роллы",
    Ingredients:
      "Нори • рис • лосось • огурец • авокадо • сливочный сыр • икра тобико",
  },
  {
    id: 30,
    name: "Ролл-Чо (230гр.)",
    img: "./img/products/rolls/Roll_cho.jpg",
    cost: 220,
    description: "Классические Роллы",
    Ingredients:
      "Нори • рис • такуан (редька Дайкон) • сливочный сыр • копченый бекон • свежий огурчик • соус-спайси",
  },
  {
    id: 31,
    name: "Калифорния-фрай с нежным крабом (230гр.)",
    img: "./img/products/rolls/kaliforniya_frie_krab.jpg",
    cost: 320,
    description: "Горячие Роллы",
    Ingredients: "Нори • рис • икра тобико • огурец • майонез • нежный краб",
  },
  {
    id: 32,
    name: "Темпура-чиз (210гр.)",
    img: "./img/products/rolls/tempura-chiz.jpg",
    cost: 320,
    description: "Горячие Роллы",
    Ingredients: "Нори • рис • курица • помидор • сыр чеддер",
  },
  {
    id: 33,
    name: "Канада (220гр.)",
    img: "./img/products/rolls/Kanada1.jpg",
    cost: 540,
    description: "Классические Роллы",
    Ingredients:
      "Нори • рис • нежный лосось • авокадо • свежий огурчик • сливочный сыр • копченый угорь",
  },
  {
    id: 34,
    name: "Сливочный ролл с мандарином (180гр.)",
    img: "./img/products/rolls/slivochniy_mandarin.jpg",
    cost: 160,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • сливочный сыр • мандарин",
  },
  {
    id: 35,
    name: "Инь-Янь (180гр.)",
    img: "./img/products/rolls/inyan.jpg",
    cost: 400,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • лосось • угорь",
  },
  {
    id: 36,
    name: "Кунсей (200гр.)",
    img: "./img/products/rolls/kunsey_new.jpg",
    cost: 395,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • сливочный сыр • угорь • кунжут",
  },
  {
    id: 37,
    name: "Чикен Ролл (175гр.)",
    img: "./img/products/rolls/chikkken_roll.jpg",
    cost: 179,
    description: "Классические Роллы",
    Ingredients:
      "Нори • рис • курица копченная • огурец • сыр • панировочные сухари",
  },
  {
    id: 38,
    name: "Кани (190гр.)",
    img: "./img/products/rolls/chikkken_roll.jpg",
    cost: 270,
    description: "Классические Роллы",
    Ingredients:
      "Нори • рис • краб • сливочный сыр • икра тобико • свежий огурчик",
  },
  {
    id: 39,
    name: "Ролл Дракон (200гр.)",
    img: "./img/products/rolls/Roll_Dragon.jpg",
    cost: 390,
    description: "Классические Роллы",
    Ingredients:
      "Нори • рис • авокадо • сливочный сыр • угорь • огурец • икра тобика",
  },
  {
    id: 40,
    name: "Ролл Магура (170гр.)",
    img: "./img/products/rolls/MAgura.jpg",
    cost: 290,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • тунец • сливочный сыр • кунжут • соус спайс",
  },
  {
    id: 41,
    name: "Запеченный с курицей (180гр.)",
    img: "./img/products/rolls/Zapecheny_kurica_2.0.jpg",
    cost: 230,
    description: "Запеченные Роллы",
    Ingredients:
      "Нори • рис • копченая курица • томат • капуста пекинская • сырная шапочка",
  },
  {
    id: 42,
    name: "Запеченный с спаржей (180гр.)",
    img: "./img/products/rolls/zapecheniy_sparhga2.0.jpg",
    cost: 170,
    description: "Запеченные Роллы",
    Ingredients: "Нори • рис • спаржа • томат • перец болгарский • соус масаго",
  },
  {
    id: 43,
    name: "Запеченный с лососем (200гр.)",
    img: "./img/products/rolls/zapecheniy_lososya.jpg",
    cost: 310,
    description: "Запеченные Роллы",
    Ingredients: "Нори • рис • лосось • огурец • сырная шапочка",
  },
  {
    id: 44,
    name: "Запеченный с крабом (180гр.)",
    img: "./img/products/rolls/zapecheniy_krabic.jpg",
    cost: 160,
    description: "Запеченные Роллы",
    Ingredients: "Нори • рис • краб • майонез • огурец • соус-спайси",
  },
  {
    id: 45,
    name: "Юта-темпура (200гр.)",
    img: "./img/products/rolls/yuta-tempura.jpg",
    cost: 320,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • жареный лосось • спаржа • лист салата",
  },
  {
    id: 46,
    name: "Чикен-темпура (220гр.)",
    img: "./img/products/rolls/chikken_tempura.jpg",
    cost: 240,
    description: "Горячие Роллы",
    Ingredients:
      "Нори • рис • копченая курица • сыр • шапочка из пармезана и зелени",
  },
  {
    id: 47,
    name: "Сяке-маки с огурцом (170гр.)",
    img: "./img/products/rolls/Syake_maki_s_ogurcom.jpg",
    cost: 210,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • лосось • огурец",
  },
  {
    id: 48,
    name: "сяке-маки с сыром (180гр.)",
    img: "./img/products/rolls/Syake_s_sirom.jpg",
    cost: 210,
    description: "Классические Роллы",
    Ingredients: "Нори • рис • лосось • сливочный сыр",
  },
  {
    id: 49,
    name: "Аспара-темпура (220гр.)",
    img: "./img/products/rolls/Ebi-tempura.jpg",
    cost: 200,
    description: "Горячие Роллы",
    Ingredients: "Нори • рис • спаржа • сыр • шапочка из пармезана и зелени",
  },
  {
    id: 50,
    name: "Сяке-темпура (220гр.)",
    img: "./img/products/rolls/Syake_tempura.jpg",
    cost: 310,
    description: "Горячие Роллы",
    Ingredients: "Нори • рис • лосось • сыр • шапочка из пармезана и зелени",
  },
  {
    id: 51,
    name: "Эби-темпура (220гр.)",
    img: "./img/products/rolls/ebi-tempura1.jpg",
    cost: 320,
    description: "Горячие Роллы",
    Ingredients: "Нори • рис • креветка • сыр • шапочка из пармезана и зелени",
  },
  {
    id: 52,
    name: "Суши с креветкой (35гр.)",
    img: "./img/products/sushi/Sushka_krevetka.jpg",
    cost: 95,
    description: "Суши",
    Ingredients: "рис, креветка",
  },
  {
    id: 53,
    name: "Суши с угрем (35гр.)",
    img: "./img/products/sushi/Sushka_ugor.jpg",
    cost: 130,
    description: "Суши",
    Ingredients: "рис, угорь, кунжут",
  },
  {
    id: 54,
    name: "Суши с лососем (35гр.)",
    img: "./img/products/sushi/Sushka_losos.jpg",
    cost: 95,
    description: "Суши",
    Ingredients: "рис, лосось",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(Rolls);
    }, 1000);
  });

export default fetchAll;
