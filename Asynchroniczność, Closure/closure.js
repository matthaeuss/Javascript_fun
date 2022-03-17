// function fullSentence(name){
//     const counter = 0
//     function sentence(city){
//         return `Mam na imię ${name} i pochodzę z ${city}`
//     }
   
//     return sentence 
// }


// const getText = fullSentence('Mateusz');
// // console.dir(getText)
// console.log(getText('Krakowa'));
// console.log(getText('Rozwadowa'));

// power10(digit), power2(digit),...
// const power10 = (digit) => digit ** 10;
//console.log(power10(2);) 2 do potęgi 10

// function raiseToPower2(power){
//     return function inner(digit){
//         return digit ** power;
//     }
// }

// const raiseToPower = (power) => (digit) => digit ** power;

// const power10 = raiseToPower(10);
// const power2 = raiseToPower(2);
// const power1 = raiseToPower(1);

// console.log(power10(2));
// console.log(power2(2));
// console.log(power1(2));
// console.dir(raiseToPower)

// universal unique id -> 1, 2, 3, 4

// function genUUID(id = 0){
//     // let id = 0;
//     function next(){
//         return id++;
//         // const result = id;
//         // id ++;

//         // return result;
//     }
//     return next
// }

// const genUUID2 = (id = 0) => () => id++;

// const uuid = genUUID(10)
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
