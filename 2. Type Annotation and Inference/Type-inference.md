# Type Annotation and Inference

Type Inference -> This is when Ts, tries to figure out what type of value a variable refers to.

Typescript in most cases knows what type the element is.

It does this though type Inferencing.

## Inferences

Take a variable declaration like

```javascript
const color = 'red';
```

If the declaration and initializatoin are on the same line, Typescript will look at the type value and infer that the variable must be of that type.

Note: When you move the initialization to a new line, like this,

```javascript
let color;
color = 'red';
```

Then Type inferencing will not work.

### When to use Type Annotation

Since TS can figure out what type a variable, or function is, why do we need to manually set the annotation?

We wee need to use annotations in the following scenerios:

- As mentioned earlier, when we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the `any` type and we need to clarify the value

> You will see all this in action soon!
