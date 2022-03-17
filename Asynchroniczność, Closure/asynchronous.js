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

const result = fetch('http://api.nbp.pl/api/exchangerates/rates/A/usd/?form=json');
result
    .then((response) => response.json())
    .then((data) => new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(data)
        }, 2000);
    }))
    .then((finalData) => console.log(finalData))
    .catch((magic) => console.log(magic, 'From catch (promise reject)'))

