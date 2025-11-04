const pizzaOrders = [
  {
    orderId: 101,
    customer: "Batman",
    size: "large",
    toppings: ["pepperoni", "mushrooms"],
    delivered: true,
    price: .33
  },
  {
    orderId: 102,
    customer: "Batgirl",
    size: "medium",
    toppings: ["sausage", "onions", "greenpeppers"],
    delivered: false,
    price: .10
  },
  {
    orderId: 103,
    customer: "Alfred",
    size: "small",
    toppings: ["cheese"],
    delivered: true,
    price: .30
  },
  {
    orderId: 104,
    customer: "Two-Face",
    size: "large",
    toppings: ["bacon", "pineapple"],
    delivered: false,
    price: .50
  },
  {
    orderId: 105,
    customer: "Robin",
    size: "medium",
    toppings: ["mushrooms", "olives", "extracheese"],
    delivered: true,
    price: .99
  }
];

// use forEach to print all customer names

// pizzaOrders.forEach(order => {
//   console.log(order.customer);
// // });

// // using forEach to print prices for each
// pizzaOrders.forEach(order => {
//   console.log(order.price);
// })

// // sum for all of the prices
// const soCheap = pizzaOrders.reduce((sum, order) => sum + order.price, 0);
// console.log("Total price:", soCheap);

// let medPizza = 0; // counts starts at 0
// pizzaOrders.forEach(order => { // loop each order
//   if (order.size === "medium") { // checking to see if SIZE is "medium" increments of 1
//     medPizza++;
//   }
// })
// // console.log("too many med pizza", medPizza); // final print
// const deliveredPizzas = pizzaOrders.filter(order => order.delivered);
// console.log(deliveredPizzas);

// deliveredPizzas.forEach(order => console.log(order.customer));

// filtered all pizza with mushrooms as toppings

// const mushPizzas = pizzaOrders.filter(order => order.toppings.includes("mushrooms"));
// console.log(mushPizzas);

// return all pizza with cheese with .every
const cheesy = pizzaOrders.filter(order =>
  order.toppings.every(toppings => toppings.includes("cheese"))
);
console.log(cheesy);
