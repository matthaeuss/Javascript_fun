# Javascript
​
## Variables
​
| x | var | let | const |
| redeclaration | yes | no | no |
| reassignment | yes | yes | no | // reinicializacja
| hoisting | yes | no | no |
| block scope | no | yes | yes | // var nie jest ograniczony block scope 
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

---

-NaN - Not a (correct) Number

## Arrays (object subtype) 
### methods
ternary operator = condition ? true : falls 

1. '[1, 2, 3].concat([4, 5, 6])' - concat
2. '[1, 2, 3].includes(2)' - includes (returns true or false) test if element exists in array
3. '[1, 2, 3, NaN].indexOf(2)' - indexOf (returns index of element or minus 1 if not found) Not working with NaN
4. '[1, 2, 3].join(', ')' - join (returns string separated by separator)
5. '[1, 2, 3].pop()' - pop (returns last element and removes it from array)
6. '[1, 2, 3].push(4)' - push (adds element to the end of array)
7. '[1, 2, 3].shift()' - shift (returns first element and removes it from array)
8. '[1, 2, 3].unshift(666)' - unshift (adds element to the beginning of array)
9. '[1, 2, 3].slice(1, 3)' - slice (returns new array with elements from start to end)
10. '[1, 2, 3].splice(1, 2)' - splice (returns removed elements and adds new elements in-place)
11. '[1, 2, 3].reverse()' - reverse (returns new array with elements in reversed order)
12. '[1, 2, 3].sort()' - sort (returns new array with elements sorted)
13. '[1, 2, 3].toString()' - toString (returns string representation of array)
14. '[1, 2, 3].valueOf()' - valueOf (returns array)
15. '[1, 2, 3].map(x => x * 2)' - map (returns new array with elements transformed by callback) - transform array
16. '[1, 2, 3].filter(x => x > 1)' - filter (returns new array with elements filtered by callback) - delete elements
17. '[1, 2, 3].reduce((acc, cur) => acc + cur)' - reduce (returns single value) - sum - aggregate array
18. '[1, 2, 3].reduceRight((acc, cur) => acc + cur)' - reduceRight (returns single value) - sum - aggregate array
19. '[1, 2, 3].forEach(x => console.log(x))' - forEach (returns undefined) - iterate array
20. '[1, 2, 3].some(x => x > 1)' - some (returns true or false) - test if any element passes test
21. '[1, 2, 3].every(x => x > 1)' - every (returns true or false) - test if all elements pass test
22. '[1, 2, 3].find(x => x > 1)' - find (returns first element that passes test) - find element
23. '[1, 2, 3].findIndex(x => x > 1)' - findIndex (returns index of first element that passes test) - find element index
24. '[1, 2, 3].fill(0, 1, 2)' - fill (returns new array with elements replaced) - replace elements
25. '[1, 2, 3].copyWithin(1, 2)' - copyWithin (returns new array with elements copied) - copy elements
26. '[1, 2, 3].entries()' - entries (returns iterator) - iterate array
27. '[1, 2, 3].keys()' - keys (returns iterator) - iterate array
28. '[1, 2, 3].values()' - values (returns iterator) - iterate array
29. '[1, 2, 3].flat()' - flat (returns new array with elements flattened) - flatten array
30. '[1, 2, 3].flatMap(x => [x, x * 2])' - flatMap (returns new array with elements transformed by callback)

---

```javascript

function callback(element=1, id=0, array=[1, 2, 3]){
    return 'New Value'
}

const newArray = [1, 2, 3].map(callback)
//[3 x New Value]

// reduce
const initialValue = 0;

const callback_ = (accumulator=array[0], 
                   current_element=array[1], 
                   id=0, array[1, 2, 3]) => {
    const newAccumulator = accumulator + currentElement;
    return newAccumulator;
}
// accumulator to zawsze array od zera w pierwszym wywołaniu
// current_element to zawsze array od 1

const newAggregationValue = [1, 2, 3].reduce(callback_, initialValue)

```

#### Copy arrays

```js

const x = [1, 2, 3];

// shallow copy
const y = [...x];
const z = x.slice();
const w = x.concat();
const v = Array.from(x);

// deep copy
const a = JSON.parse(JSON.stringify(x));
const b = Object.assign([], x);
```

#### Check if array

```js
Array.isArray([]); // true
```

# Closure

- dostęp do zmiennej spoza aktualnie wykonywanego zsięgu 

# creating

- 2 functions (outer, inner)
- funckja outer musi zwracać deklarację funkcji inner 
- funkcja inner musi wykorzystywać coś(zmienne, deklaracje funkcji, deklaracje klas) z funkcji outer 

# Pros & cons

- persistence
- memory leak 



//js_notes README.MD

## Asynchronous programming
1. Callback(funkcja wywołania zwrotnego)
2. Promise 
3, Generators and Coroutines
4. Async / await (syntactic sugar dla promisów, )


