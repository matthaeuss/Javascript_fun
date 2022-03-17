// const data = [1, 2, 3];

// const result = data.map(item => item * 2)
// console.log(result)

// const fn = (item, index, array) => {
//     return item * index
// }

// const result = data.map(fn)
// console.log(result);

// True/Falls

// const result = data.map(Boolean);
// console.log(result);

// const result = ['10', '10', '10'].map(parseInt);
// console.log(result);


const data = [

    {
        name: 'Pawel',
        age: 36,
        city: 'Wegierska Górka',
        hobbies: ['python', 'javascript', 'drugs']
    },
    {
        name: "Szymon",
        age: 30,
        city: "Czestochowa",
        hobbies: ["kebab", "multikebab"]
    },
    {
        name: 'Mirek',
        age: 31,
        city: 'Krakow',
        hobbies: ['cars', 'food', 'js']
    },
    {
        name: 'Dominika',
        age: 23,
        city: 'Cracow',
        hobbies: ['singing', 'sport', 'thriller books/films']
    },
    {
        name: "Monika",
        age: 34,
        city: "Kraków",
        hobbies: ['python', 'psychology', 'books']
    },
    {
        name: 'Lukasz',
        age: 32,
        city: 'Krakow',
        hobbies: ['computer games', 'books', 'js']
    },
    {
        name: 'Marcin',
        age: 33,
        city: 'Krakow',
        hobbies: ['no_hobbies']
    },
    {
        name: 'Maciek',
        age: 26,
        city: 'Kraków',
        hobbies: ['tenis', 'python', 'music']
    },
    {
        name: 'Oliver',
        age: 19,
        city: 'Krakow',
        hobbies: ['music prod', 'skateboard', 'technology']
    },
    {
        name: "Anita",
        age: 30,
        city: "Cracow",
        hobbies: ["graphic design", "skateboarding", "art"]
    },
    {
        name: 'Remik',
        age: 27,
        city: 'Krakow',
        hobbies: ['coding', 'games', 'kebabs']
    },
    {
        name: 'Przemek',
        age: 29,
        city: 'Krakow',
        hobbies: ['python', 'js', 'it']
    },
    {
        name: 'Andrzej',
        age: 30,
        city: 'Wrocław',
        hobbies: ['cooking', 'drinking', 'python']
    },
    {
        name: 'Mateusz',
        age: 28,
        city: 'Krakow',
        hobbies: ['windsurfing', 'literature', 'coding']
    }
]

// const result = data.map(person => person.age).reduce((acc, age) => acc + age)/data.length
// console.log(sum);

//accumulator - x[0] w pierwszej iteracji - wynik poprzedniej iteracji 2:45 w nagraniu
// const x = [1, 2, 3];
// x.reduce((acc, ce, id, array) => acc + ce, 0);

// const result = data.reduce((acc, person) => acc + person.age, 0)/data.length;

// const hobbies = data.flatMap(person => person.hobbies);
// const result2 = hobbies.reduce((acc, hobby) => acc + hobby.length, 0);
// console.log(result2/hobbies.length);

// const result = data.reduce((acc, {age}) => acc + age, 0)/data.length
// console.log(result);

// const result = data.filter(person => person.city === 'Krakow' 
//     || person.city === "Kraków" 
//     || person.city === 'Cracow')
//     .sort((a, b) => a.age === b.age ? 0 : a.age > b.age ? 1 : -1)
//     .map(person => person.name);

// console.log(result);

// const result = data.filter(person => person.hobbies.includes('js'))
//     .map(person => person.name)
//     .sort((a, b) => a.length > b.length ? 1 : -1);

// console.log(result);

// const result = data.filter(person => !person.hobbies.includes('js'))
//     .map(person => person.name)
//     .sort((a,b)=> a.length > b.length ? 1 : -1);

// set służy do obsługiwania duplikatów

// const result = new Set(data.reduce((acc, person) => [...acc, ...person.hobbies], []))
// console.log(new Set(result));

// const result = data.some(person => person.age === 19);
// console.log(result)

// const result = data.every(person => person.age < 40);
// console.log(result)