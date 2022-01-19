const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// the type definition in tuples is an order of elements

const pepsi: [string, boolean, number] = ['brown', true, 40];


// you can create a tuple by creating a type alias

type Drink = [string, boolean, number];

const fanta: Drink = ['red', false, 100];


// Tuples are really cool lol - but you'd really not use often

// They are really hard to read. Objects have keys and thus are easer to represent data.
// Take for example

const carSpecs: [number, number] = [400, 3354];

// The engineer has no idea what the values represent

const carStats = {
  horsepower: 400,
  weight: 3354,
}

// The object representation with a key and value maes more sense