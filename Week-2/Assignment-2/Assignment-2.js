function avg(data) {
  let price1 = data.products[0].price;
  let price2 = data.products[1].price;
  let price3 = data.products[2].price;
  let total = price1 + price2 + price3;
  let average = total / data.size;
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
