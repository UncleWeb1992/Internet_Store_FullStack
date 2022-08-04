export function filter(category, data) {
  let selectedProducts = [];
  switch (category) {
    case "Классические Роллы": {
      const products = data.filter((p) => p.description === category);
      selectedProducts.push(products);
      break;
    }
    case "Филадельфия": {
      const products = data.filter((p) => p.description === category);
      selectedProducts.push(products);
      break;
    }
    case "Тортилья": {
      const products = data.filter((p) => p.description === category);
      selectedProducts.push(products);
      break;
    }
    case "Горячие Роллы": {
      const products = data.filter((p) => p.description === category);
      selectedProducts.push(products);
      break;
    }
    case "Запеченные Роллы": {
      const products = data.filter((p) => p.description === category);
      selectedProducts.push(products);
      break;
    }
    case "Суши": {
      const products = data.filter((p) => p.description === category);
      selectedProducts.push(products);
      break;
    }
    default:
      return (selectedProducts = [data]);
  }

  return selectedProducts;
}
