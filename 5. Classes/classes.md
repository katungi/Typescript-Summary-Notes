# TypeScript Classes

Classes are a blueprint to create an object with some fields (values) and methods (functions) to represent something

Creating a class is easy, just pass in the keyword `class`

```ts
class Vehicle {

}
```

Note the class name is always capitalized

Classes can have methods (functions) within them, that do different things. Let's create 2 methods in our class

```ts
class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('Honk Honk');
  }
}
```

To use a methods in a class or the class itself, you create a new instance of the class using the `new` keyword

```ts
const vehicle = new Vehicle();
```

We can now access the methods in the class using the class instance

```ts
vehicle.drive();
vehicle.honk();
```

## Inheritance

Inheritance in Ts works almost the same as any other OOP language

To create a class that inherits from `class Vehicle`, we use the extends keywords:

```ts
class Car extends Vehicle {}
```

Class Car has now inherited the methods from class Vehicle and can be accessed by using creating an instance of class Car

You can always override the methods in the child class by creating a method of the same name and structure.

## Instance Method Modifiers

Classes in Ts differ from classes in ES2015 Js just a little.

One of the key differences is Method Modifiers.

They are keywords used to restrict access to different functions and variables in the class.

There are 3 modifiers in Ts:
- `public` - This Method can be called anywhere, any time
- `private` - This Method can only be called by other methods in this class
- `protected` - This Method can only be called by other methods in this class, or by other methods in child classes