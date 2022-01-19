# Arrays in TypeScript

## Why we Care

1. Typescript can type inference when extracting values from an array

- Take for instance an array `carMakers` below.

  ```typescript
  const carMakers = ['ford', 'toyota', 'chevy']
  ```

- When we try to try to access an element of this array, we are sure the resulting variable will be an string.

  ```ts
  const car = carMakers[0]
  ```

2. Typescript can prevent us from adding incompatible values to the array

3. We can get help with Js array functions like `map`, `forEach` or `reduce` functions

- For example when working with say Map, typescript will infer the value of the returned variable because both the function and return value's types are known

```ts
carMakers.map((car: string): string => {
  return car
})
```

4. Flexibility - We can have flexible types
