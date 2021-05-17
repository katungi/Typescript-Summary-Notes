// PRIMITIVE TYPES
// Let's declare a variable with type annotation

let oranges: number = 5;

// :number is us telling typescript that we can only assign variable oranges values of type numbers.

let speed: String = 'fast';

// speed has a type of String. You cannot assign it a number

let nothing: null = null;
let nothingHere: undefined = undefined;

// A variable can be null or undefined as well

// YOU GET THE POINT

// OBJECT Literal Annotations

// let's try make some more complex types

// Array
let colors: string[] = ['red', 'green', 'blue'];

// the array is annotataed by the square brackets. and the array can only have strings
// this is a more complicated type. :string[] means the type is array of strings
// lets try it with numbers.

let nums: number[] = [1, 2, 3];

// lets try an array of booleans

let crazy: boolean[] = [true, true, false];

// PERFECT. You can play around with types now.

// Classes
// create a class Car

class Car {

}

// let's create an instance of class Car called car
let car: Car = new Car();

// The type of the car instance is Car from the class

// OBJECT LITERAL

// let point = {
//   x: 10,
//   y: 20,
// };

// To annotate objects i a bit more complex. Hang in there

// for our object 'point' above we can add a colon an curly braces. Inside those curly braces, I will add the different types of key and values


let point: { x: number, y: number } = {
  x: 10,
  y: 20,
};

// This means x can only be assingned a number, and y will be assigned a number


