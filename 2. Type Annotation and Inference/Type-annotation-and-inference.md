# Type Annotation and Inference

Type annotations -> This is code we add to tell Ts what type of value a variable will refer to.

Type Inference -> This is when Ts, tries to figure out what type of value a variable refers to.

## But wait - Doesn't that conflict?

We are tring to tell typescript the type, but it is trying to guess the type as well. That's conflicting.

### Annotating Primitive Types

Let's declare a variable with type annotation

```typescript
let oranges: number = 5;
```

`:number` is us telling typescript that we can only assign variable oranges values of type numbers.

```typescript
let speed: String = 'fast';
```

speed has a type of String. You cannot assign it a number

```typescript
let nothing: null = null;
let nothingHere: undefined = undefined;
```

A variable can be of type null or undefined as well

### OBJECT Literal Annotations

let's try make some more complex types

```typescript
let colors: string[] = ['red', 'green', 'blue'];
```

The array is annotataed by the square brackets. and the array can only have strings
This is a more complicated type. :string[] means the type is array of strings

lets try it with an array of numbers

```typescript
let nums: number[] = [1, 2, 3];
```
