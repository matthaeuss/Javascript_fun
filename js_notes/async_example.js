function foo() {

    Promise.resolve().then(() => console.log(1));

    setTimeout(() => {
        console.log(2);
    }); // najpierw cały kod synchroniczny

    Promise.resolve().then(() => console.log(3));

    console.log(4);
}

foo();

console.log(5);

// event driven developement
// 4 - 5 - 1 - 3 - 2
// console.log jest side-effect
// Promise mają priorytet nad wszystkim innym
// Kod synchroniczny wykonuje się przed asynchronicznym zawsze


