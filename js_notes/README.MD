# Javascript
​
## Variables
​
| x | var | let | const |
| redeclaration | yes | no | no |
| reassignment | yes | yes | no |
| hoisting | yes | no | no |
| block scope | no | yes | yes |
​
### Hoisting
- moving declarations of var, named function and class to the top of the current scope
​
### Shallow vs Deep Copy (References concept)
​
```js
const a = [[1, 2], [3, 4]];
const b = a;
b[0][0] = 10;
// console.log(a); // [ [ 10, 2 ], [ 3, 4 ] ]
// console.log(b); // [ [ 10, 2 ], [ 3, 4 ] ]
​
b[0] = [10, 20];
// console.log(a); // [ [ 10, 20 ], [ 3, 4 ] ]
// console.log(b); // [ [ 10, 20 ], [ 3, 4 ] ]
​
const c = [...a]; // [ [ 10, 20 ], [ 3, 4 ] ]
c[0][0] = 100;
// console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// console.log(c); // [ [ 100, 20 ], [ 3, 4 ] ]
​
c[0] = [100, 200];
// console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// console.log(c); // [ [ 100, 200 ], [ 3, 4 ] ]
​
​
const d = JSON.parse(JSON.stringify(a));
d[0][0] = 1000;
console.log(d); // [ [ 1000, 200 ], [ 3, 4 ] ]
console.log(a); // [ [ 100, 200 ], [ 3, 4 ] ]
```

## Functions

1. Named function
2. Anonymous function
3. Arrow function(anonymous as well)
---
4. Function expression


