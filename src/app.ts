const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];
// Arrow function or function()

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

//console.log(mappedPizzas);

const pizza = {
  name: 'Blazing Saddle',
  // various ways of creating a function
  // arrow
  //getName: () => pizza.name,
  // literal
  getName() {
    return this.name;
  },
  price: 15
};
//console.log(pizza.getName());

// literal created from other properties
const toppings = ['pepperoni'];
const order = { pizza, toppings };
//console.log(order);
// default function arguments

function multiply(a = 0, b = 25) {
  return a * b;
}

//console.log(multiply(5, 2));

// Rest params pass in a whole array as a argument (...arr)
function sumAll(message: string, ...arr: number[]) {
  //console.log(arguments);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('hey', 1, 2, 3, 4, 5, 6);

//console.log(sum);

/* merge using spread operator and array
const flavors = ['courgette', 'chilli'];
const newFlavors = ['parsley'];
const allFlavors = [...flavors, ...newFlavors];
console.log(allFlavors);
*/
//destructuring array/objects .. pluck data from a array
/*
const newPizza = {
  name: "Courgette",
  toppings: ["parsley", "chilli"]
};
function newPizzaOrder({ name: any, toppings: string }) {
  console.log(name, toppings);
}
newPizzaOrder(newPizza);
*/
// number types
const pizzaCost: number = 10;
const pizzaToppings: number = 2;
function calcPrice(cost: number, toppings: number): number {
  // returns a number :number
  return cost + 1.5 * toppings;
}
const cost: number = calcPrice(pizzaCost, pizzaToppings);
console.log('Pizza Costs: ' + cost);

//string types
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}
const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);

//boolean type
const newPizzas: number = 5;
function offerDiscount(orders: number): boolean {
  return orders >= 3;
}
if (offerDiscount(newPizzas)) {
  console.log(`You are entitled to a Discount`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}

// any type -- good if working with dynamic variables -- thats about it
let letter;
letter = 25;

// explicit and implicit types
let implicitLetter = 'peach25'; // inferred types
let explicitLetter: string = 'peache25';

// void types
let selectedFlavor: string = 'chilli';
// function is void nothing returned -- happy to infer
function selectFlavor(topping: string): void {
  selectedFlavor = topping;
}
selectFlavor('peppermint');
console.log(selectedFlavor);

// null defined structures -- tsconfig strict = false or
let ticket: string | null = 'bad25'; //use OR operator (union type)

function removeTicket(): void {
  ticket = null;
}
console.log(ticket);
removeTicket();
console.log(ticket);

// union type gives some flexibility -- OR operator
let letterSize: string = 'small';

function selectSize(size: 'small' | 'medium'): void {
  letterSize = size;
}
selectSize('small');

// function types
// named function sumOrder
function sumOrder(price: number, quantity: number): number {
  return price * quantity;
}
// or declared as a tyoe
let sumNumbers: (price: number, quantity: number) => number;

sumNumbers = (x, y = 1) => {
  // y  now has a default value
  return x * y;
};
// object types

let bike: { name: string; price: number; getName(): string };

bike = {
  name: 'fastNess',
  price: 20,
  getName() {
    return bike.name;
  }
};
// collections array type

let sizes: string[];
sizes = ['small', 'medium', 'large'];

// generic type
let bikes: Array<string>;
bikes = ['redBike'];

// Tuple type .. array made up of different types
let bicycle: [string, number, boolean];

bicycle = ['red', 10, true]; // has to be same order as declared - strict structure

// type alias -- assign any type .. can export
type Colour = 'blue' | 'red' | 'green';

type Callback = (size: Colour) => void; //custom type

let bicycleColour: Colour = 'blue';

const selectColour: Callback = x => {
  bicycleColour = x;
};

selectColour('green');

// type assertions

type Bateau = { name: string; size: number };

const bateau: Bateau = { name: 'el grande', size: 24 };

const serialized = JSON.stringify(bateau);

function getNameFromJSON(obj: string): any {
  return (JSON.parse(obj) as Bateau).name;
}

console.log(getNameFromJSON(serialized));

// Interfaces -- Structure or shape of a object

// Extend a base interface:
interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number; // optional ? syntax
  getAvailableSizes(): string[];
  [key: number]: string;
}

let pissa: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,

    getAvailableSizes() {
      return this.sizes;
    }
  };
}

pissa = createPizza('artichoke', ['small']);
pissa.toppings = 1;
