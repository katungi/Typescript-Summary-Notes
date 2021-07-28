// PRIMITIVE TYPES


let oranges: number = 5;
let speed: String = 'fast';
let nothing: null = null;
let nothingHere: undefined = undefined;


// Array
let colors: string[] = ['red', 'green', 'blue'];
let nums: number[] = [1, 2, 3];
let crazy: boolean[] = [true, true, false];

// Classes

class Car {

}

// let's create an instance of class Car called car
let car: Car = new Car();


// OBJECT

// let point = {
//   x: 10,
//   y: 20,
// };

let point: { x: number, y: number } = {
  x: 10,
  y: 20,
};


// Function
// creating a function with a type.
// We only care about arguments going into the function and the return values

// take this function for example

// const logNumber:  = (i) => {
//   console.log(i);
// }

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// this means that we will receive a value i of type number, and return a void

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);