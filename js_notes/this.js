// const teacher = 'Kyle';

// function otherClass(){
//     const teacher = 'Suzy';
//     console.log("Welcome")
// }

// function ask(){
//     const question = "Why?"
//     console.log(question);
// }

// otherClass();
// ask();
// ----

// "use strict";

// var teacher = 'Kyle';

// function otherClass(){
//     teacher = 'Suzy';
//     topic = "React";
//     console.log("Welcome");
// }
// console.log(teacher)
// console.log(topic)

// ---

// let teacher = 'Kyle';

// function otherClass() {
//     let teacher = 'Suzy';

//     function ask(question) {
//         console.log(teacher, question);
//     }

//     ask("Why?");
// }

// otherClass() 


// let teacher = 'Kyle';

// function ask(question){
//     console.log(this.teacher, question);
// }

// function otherClass() {
//     const myContext = { 
//         teacher: 'Suzy'
//     }
//     ask.call(myContext, "Why?");
// }

// otherClass() 

// ---- implicit bindin

// const workshop = {
//     teacher: "Kyle",
//     ask(question){
//         console.log(this.teacher, question);
//     }
// }

// workshop.ask("What is implicit binding?"); 

// --- explicit binding

// function ask(question){
//     console.log(this.teacher, question);
// }

// const workshop = {
//     teacher: "Kyle",
//     // ask: ask
// }

// const workshop2 = {
//     teacher: "Suzy",
//     // ask
// }

// // workshop. ask("What is implicit binding?");
// // workshop2.ask("How do I share a method?");
// ask.call(workshop, "Can I explicitly set context?");
// ask.call(workshop2, "Can I explicitly set context?");

// --- hard binding

// var workshop = {
//     teacher: "Kyle",
//     ask(question){
//         console.log(this.teacher, question);
//     }
// }

// const c = workshop.ask.bind(workshop)

// setTimeout(workshop.ask, 10, "Lost this?");
// setTimeout(c, 10, "Hard bound this?")

// setTimeout(() => {
//     workshop.ask('Lost this')
// }, 10, "Lost this?");


//----

// function ask(question){
//     console.log(this.teacher, question);
// }

// const newEmptyObject = new ask("What is 'new' doing here?");

// --- default this

// var teacher = "Kyle";

// function ask(question){
//     console.log(this.teacher, question);
// }


// function askAgain(question){
//     "use strict";
//     console.log(this.teacher, question);
// }

// ask("What is the non-strict-mode default?");
// askAgain("What is the strict-mode default?");

// ---

// const workshop = {
//     teacher: "Kyle",
//     ask: function ask(question){
//         console.log(this.teacher, question);
//     }
// }

// const w2 = {
//     teacher: "Suzi"
// }

// new(workshop.ask.bind(workshop))("What does this do?")
// workshop.ask.bind(w2)("What does this do?");
// workshop.ask.bind(workshop).call(w2, "What does this do?");
// workshop.ask.bind(w2).call(workshop, "What does this do?"); // bind jest silniejszy od calla


// const workshop = {
//     teacher: "Kyle",
//     ask(question){
//         setTimeout(() => {
//             console.log(this.teacher, question);
//         }, 100);
//     }
// }


// workshop.ask("Is this lexical 'this'?");

// const workshop = {
//     teacher: "Kyle",
//     ask: (question) => {
//         console.log(this.teacher, question);
//     }
// }


// workshop.ask("What happened to 'this'?");
// workshop.ask.call(workshop, "What happened to 'this'?");

// const Workshop2 = {
//     teacher: "Kyle",
// }

// Workshop2.ask = () => {}



function Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
}

const deepJs = new Workshop('Kyle');

console.log(deepJs.constructor === Workshop);
console.log(deepJs.__proto__ === Workshop.prototype);
console.log(Object.getPrototypeOf(deepJs) === Workshop.prototype);

