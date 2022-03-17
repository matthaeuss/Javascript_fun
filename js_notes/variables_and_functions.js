// REDECLARATION OF VARIABLES!!!

// function x(a) {
//     surname = 42;
//     return a * a;
// }

// // var name = 42;
// // Javascript's strick mode 

// // 2015

// let name1 = 42;
// const name2 = 42;

// Redeclaration of variables

// var x;
// var x;

// console.log(x); // undefined

// let y;
// let y; 
// console.log(y); // syntaxError: Identifier 'y' has already been decalre

// const z;
// const z;

// console.log(z); // syntaxError: Missing initializer is const declaration

// HOISTING!!!

// console.log(x);
// var x = 10;

// var y;
// console.log(y); // te zmienne utworzone varem są przenoszone na górę aktualnie przetwarzanego zasięgu
// y = 10; // w tym momencie zasięg jest globalny

//hoisting();
// zasięg scope wewnątrz funkcji
// function hoisting(){
//     var x;
//     var y;
//     x = 10;
//     y = 10;
// }

// hoisting();

// REASSIGNMENT!!!

// var x = 10;
// x = 20;
// console.log(x);

// let y = 10;
// y = 20;
// console.log(y);

// const z = 10; 
// z =20; // TypeErro: Assignment to constant variable.

// BLOCK SCOPE!!! (SCOPE)
// zasięg globalny to specyficzny przypadek zasięgu blokowego

//  {
//      var x = 10;
//      let y = 10;
//      const z = 10;
//  }

// var używamy wtedy, kiedy chcemy mieć zasięg funkcyjny

//  console.log(x); // 10
//  console.log(y); // Refernce Error: y is not defined
//  console.log(z); // Refernce Error: z is not defined

// let a = 1;
  
// if (1 === 1){ // RHS i LHS(odczyt i zapis)
//     a = [1, 2, 3][a]; // stworzone wewnątrz bloku, więc na zewnątrz jest niedostępne
//     // jak przed 'a' jest let to tworzona jest nowa wartość, inaczej nadpisywana jest górna. 
// } else {
//     a = 30
// } // a zachwouje się jak by miało zasięg funkcyjny 

// console.log(a); // 10 (zmienna a zadeklarowana poza block scope)

// for (let i=0; i<10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     // console.log(i); // jeżeli let to i jest undefined
// }

// console.log(i); // 10


// const a = [[1, 2], [3, 4]];
// const b = a;
// b[0][0] = 10;
//  console.log(a); // [[10, 2], [3, 4]]
//  console.log(b); // [[10, 2], [3, 4]]

// b[0] = [10, 20];

//  console.log(a); // [[10, 20], [3, 4]]
//  console.log(b); // [[10, 20], [3, 4]]

// const c = [...a];
//  c[0][0] = 100;
//  console.log(a);
//  console.log(c);

// c[0] = [100, 200];
//  console.log(a);
//  console.log(c)


// const d = JSON.parse(JSON.stringify(a));
// d[0][0] = 1000;
// console.log(d); //to jest string teraz
// console.log(a);

// functions 

// function name1(...params){ // rest-operator(aby złapać wszystkie argumenty przekazne do funkcji)
//     // body
//     // console.log(arguments);
//     return params;
// }

// console.log(name1(10, 2, 3, 4, 5));

// function anonymous

// const name2 = function(...params){
//     return params;
// }; //function expression, wyrażenie funkcyjnie nie jest hoistowane, a zwykłe funkcje są


// const name3 = (...params) => {
//     console.log(arguments);
//     return params;
// }

// console.log(name3(10, 2, 3, 4, 5));