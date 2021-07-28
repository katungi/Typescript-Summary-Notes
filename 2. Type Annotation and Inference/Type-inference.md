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

Note: When you move the declaration to a new line, like this,

```javascript
let color;
color = 'red';
```

Then Type inferencing will not work.
