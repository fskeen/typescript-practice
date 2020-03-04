/**
 * TUPLES!
 * What is a tuple?
 * an array-like structure where each element represents some property of the SAME record
 * it's like objects and arrays had a child
 * ORDER MATTERS! this is what preserves the "label" or "key" that the value is linked to. Items are in a set order so you know that the first element might be the color, second might be the size, and third might be weight. This order is the same every time.
 */

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

// the below line turns an array into a tuple!
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];

// tuples vs objects -- objects are easier to read at a glance, but tuples have their uses
const carSpecs: [number, number] = [400, 3354];
const carStats: {
  horsepower: number;
  weight: number;
} = {
  horsepower: 400,
  weight: 3354
};
