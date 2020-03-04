// Due to TYPE INFERENCE none of the following type declarations are actually necessary!

let apples: number = 5
// apples = true   type error!

let speed: string = "10"
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date();

// array
let color: string[] = ["red", "green", "blue"]
let myNumbers: number[] = [1,2,3,4]
let bools: boolean[] = [true, false]
let objects: object[] = [{}, {}]

// Classes (es5)

class Car {

}
let car: Car = new Car();

// Object literal

let point: {
    x: number,
    y: number
} = {
    x: 10,
    y: 20
    // z: 30 -- Property doesn't exist in declaration, so TS won't let it through currently
}

// function...but actually a variable! This determines the shape of the data stored in the variable
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// When to use ANNOTATIONS
/**
 * 1. Function returns 'any' type
 */
const json = `{"x": 10, "y": 20}`
const coordinates: {x: number, y: number} = JSON.parse(json)
console.log(coordinates)

// 2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i= 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numAboveZero: boolean | number = false; // single pipe = OR in TS

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numAboveZero = numbers[i]
    }
}