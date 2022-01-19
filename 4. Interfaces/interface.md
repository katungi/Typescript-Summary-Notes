# Interfaces

An interface creates a new `type`, describing the `property names` and value types of an object.

They help to avoid type duplication and having very long type declarations

To create a tuple, you use the keyword `interface`.

```ts
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
```

Let's take it for a test. Say we want to create a new Object that has the same properties:

```ts
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};
```

Now let's create a function that needs to take in `oldCivic` as a parameter:

```ts
const printVehicle = (vehicle: Vehicle): void => {};
```

Declaring the type of the Object vehicle was easier as we just passed the interface

Without the interface, it would look something like this:

```ts
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {};
```

And that would be untidy 💔
