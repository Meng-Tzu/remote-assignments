function avg(data) {
  price1 = data.products[0].price;
  price2 = data.products[1].price;
  price3 = data.products[2].price;
  total = price1 + price2 + price3;
  average = total / data.size;
  return average;
}

console.log(
  avg({
    size: 3,
    products: [
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 700 },
      { name: "Product 3", price: 250 },
    ],
  })
); // should print the average price of all products
