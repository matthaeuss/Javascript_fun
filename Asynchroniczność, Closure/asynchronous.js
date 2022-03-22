// setTimeout(() => {
//     console.log('elo') // ta funkcja jest callbackiem
// }, 500);

// const handleEvent = (evt) => {
//     console.log('it works-handle', evt.target)
// }
// document.body.addEventListener("mouseover", handleEvent)

// document.body.addEventListener("mouseover", (MouseEvent) => {
//     console.log('It works')
// })

// Promise

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolve Value")
//     }, 1001);

//     setTimeout(() => {
//         reject("Reject Value")
//     }, 1000); // reject wywołuj się najpierw bo jest szybciej

// });

// promise
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("finally teardown!"); //metoda opcjonalna 
//     })

// const squareRef = document.querySelector('.square');

// // callback hell

// setInterval(() => {
//     setTimeout(() => {
//         squareRef.style.left = "300px";
//         setTimeout(() => {
//             squareRef.style.top = "300px";
//             setTimeout(() => {
//                 squareRef.style.left = "0px";
//                 setTimeout(() => {
//                     squareRef.style.top = "0px"; 
//                 }, timeout); 
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 8000);
// setTimeout(() => {
//     squareRef.style.top = "300px";
//     setTimeout(() => {
//         squareRef.style.left = "0px";
//         setTimeout(() => {
//             squareRef.style.top = "0px"; 
//         }, 5000);
//     }, 5000);
// }, 5000);


// fetch - 2015 ajax (XMLHTTPRequest), promise based 

// const promise = new Promise((resolve, reject) =>{
//     const request = fetch('http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json');
//     request.then(e => {
//         if(e.status === 404){
//             rreject()
//         }
//     })
// })

// const result = fetch('http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json');
// result
//     .then((response) => response.json())
//     .then((data) => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(data)
//         }, 2000);
//     }))
//     .then((finalData) => console.log(finalData))
//     .catch((magic) => console.log(magic, 'From catch (promise reject)'))


// const myFetch = (url, {method="GET", headers, body=null} = {}) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.open(method, url, true);
//         request.send(body);

//         if(request.status === 200){
//             resolve(request.response);
//         }
//         reject(request.status);
//     })
// }

// const response = myFetch('http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json');
// response
//     .then((data) => console.log(data))
//     .catch((data) => console.log(data));

// implementacja fetcha asynchronicznie

// const myFetch = (url, { method = "GET", headers, body = null } = {}) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.open(method, url, true);
//         request.send(body);

//        request.onreadystatechange = () => {
//            if(request.readyState === 4){
//                if(request.status === 200){
//                 resolve(request.response);
//                }
//            }
//            reject(request.status);
//        }
//     })
// }

// const response = myFetch('http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json');
// response
//     .then((data) => console.log(data))
//     .catch((data) => console.log(data));


//Generators

// function* gen(){
//     console.log(1)
//     yield 1
//     console.log(2)
//     yield 2
//     console.log(3)

// }

// const g = gen(); // działa taka jak closure
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// function* gen(){

//     let id = 0;

//     while(true){
//         yield 1
//         yield 2
//         yield 3
//     }
// }


// function* nextPlayer(players){
//     let id = 0;

//     while(true){
//         // yield players[id % players.length];
//         // id++
//         // yield players[id];
//         // id = ++id % players.length // nieskończone iterowanie po tablicy 
//         yield players[id];
//         id = (--id + players.length) & players.length //prefPlayer function 
//     }
// }

// const p = ['ala', 'ola', 'ula']
// const g = nextPlayer(p)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// //korutyna(importante) - korutyna to jest generator do którego możemy przesyłać dane(1:30 nagrania)
// function* magic(){
//     let a = 10;
//     let b = yield a +20; // korutyna(współprogram), wygląda jak generator, ale to nie to samo 
//     yield b;
// }

// const g = magic()
// console.log(g.next())
// console.log(g.next(42))
// console.log(g.next())
//corutine
// function* getData(url) {
//     const data = yield fetch(url);   
//     console.log(data)
// }

// const u = 'http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json'
// const fetchData = getData(u)
// fetchData
//     .next()
//     .value
//     .then((response) => response.json())
//     .then((data) => fetchData.next(data));

//await tylo przed promise, a nie na pałe!

async function getData(url) {
    const response = await fetch(url); 
    const data = await response.json();   
    console.log(data)
}

const u = 'http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json'
getData(u)


