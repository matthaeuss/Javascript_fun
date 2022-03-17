// palindrome 

function isPalindrome(text) {
    return text
        .toLowerCase()
        .split('')
        .reverse()
        .join('') === text.toLowerCase();
}

console.log(isPalindrome("ala"));

//anonymous function

const isPalindrome2 = function (text) {
    return text
        .toLowerCase()
        .split('')
        .reverse()
        .join('') === text.toLowerCase();
}

// arrow function

const isPalindrome3 = text => text
    .toLowerCase()
    .split('')
    .reverse()
    .join('') === text.toLowerCase();

const lessThanOne = (digit) => digit <= 10;
const lessOrEqualToZero = (digit) => digit <= 0;
const lessOrEqualToZero2 = (digit) => {
    digit <= 0;
}// jak nie ma klamerek to jest implicit return


// max(rest operator)

const max = (...values) => {
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] > max) {
            max = values[i];
        }
    }
    return max;
}

//max 2

const max2 = (...digits) => {
    return digits.reduce((max, current) => {
        if (current > max) {
            return current;
        }
        return max;
    }, digits[0]);
}

const max3 = (...digits) => {
    let max = digits[0];

    digits.forEach((digit) => {
        if (digit > max) {
            max = digit;
        }
    })
    return max3;
}

// range(5) -> [0, 1, 2, 3, 4]
// range(1, 5) -> [1, 2, 3, 4]
// range(1, 10, 2) -> [1, 3, 5, 7, 9]

function range(start, stop, step = 1) {
    if (stop === undefined) {
        stop = start;
        start = 0;
    }

    const temp = [];
    // let i = 0;

    while (temp.length < (stop - start) / step) {
        temp.push(start + temp.length * step)
    }
    return temp;
}

// async znaczy, że funkcja będzie asynchroniczna i interpreter bedzię ją przetwarzał jako cortina z promisem
async function getExchangeRate(url, currencyCode) {
    const response = await fetch(`${url}${currencyCode}?format=json`);
    // const data = await response.json();
    // return data 
    return await response.json();
}

getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a/', 'EUR').then(data => {
    console.log(data.rates[0].mid);
});

https://danepubliczne.imgw.pl/api/data/synop/

function getWeather(url) {
    return fetch(url).then(response => response.json());
}

function getWeatherData(promise, weatherParams) {
    promise.then(data => {
        const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
        console.log(newData);
    })
}

const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/");
getWeatherData(result, 'temperatura')

// drugi sposó, który jednak łamie zasdę single responsibility 
function getWeather(url, weatherParams) {
    return fetch(url).then(response => response.json().then(data => {
        const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
        console.log(newData);
    }));
}

getWeather("https://danepubliczne.imgw.pl/api/data/synop/");

// trzeci sposób

function getWeather(url) {
    return fetch(url).then(response => response.json());
}

async function getWeather2(url) {
    return await fetch(url).then(response => response.json());
}

function getWeatherData(url, weatherParams, fns) {
    fns(url).then(data => {
        const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
        console.log(newData);
    })
}

getWeatherData("https://danepubliczne.imgw.pl/api/data/synop/", 'temperatura', getWeather2);

print(() => {
    console.log("Pierwsza funkcja.")
});

addition((a, b) => {
    return a + b
});

multiplication((a, b) => {
    return a * b;
});

dividing((a, b) => {
    return a / b;
});

amplification((a) => {
    return a * a
});

dzieleniePrzez2(function (number) {
    if (number % 2 === 0) {
        console.log('Liczba ${number} jest podzielna przez dwa bez reszty')
    } else {
        console.log('Liczba ${number} nie jest podzielna przez dwa bez reszty')
    }
});

toCelsius(function (f) {
    return (f - 32) * (5 / 9);
});

toFahrenheit(function (c) {
    return (c * 9 / 5) + 32;
});

toMeter(function (y) {
    return (y / 1, 09144);
});

toYard(function (m) {
    return (m * 1, 093613);
});

greet(function () {
    const name = window.prompt("Enter your name: ");
    if (name != null) {
        document.getElementById("demo").innerHTML =
            "Hello" + person + "! How are you today?";
    }
});

circleArea(function (radius) {
    return 3.14 * radius ** 2;
});

circlePerimeter(function (radius) {
    return 2 * 3.14 * radius
});

squareArea((a) => {
    return a * a
});

squarePerimeter(function (a) {
    return 4 * a
});


squareRectangle(function (a, b) {
    return a * b
});

rectanglePerimeter((a, b) => {
    return 2 * (a + b)
});

squareParallelogram((a, h) => {
    return a * h
});

perimeterParallelogram(function (a, b) {
    return 2 * (a + b)
});

squareRhomb(function (e, f) {
    return (e * f) / 2
});

setTimeout(function () {
    console.log("JavaScript Rules")
}, 4000);

setInterval(() => {
    console.log("Wygenerowano setInterval")
}, 10000);

let count = 0;
function countHello(liczba) {
    console.log("Liczba, która przychodzi:", liczba)
    let pointer = setInterval(() => {
        count += 1;
        console.log("Hello", count);
        if (count === liczba) {
            clearInterval(pointer)
        }
    }, 1000);
}

let getNumber = (number, array) => {
    return array.includes(number);
};

let addTheSameNumbers = (number, array) => {
    let counter = 0;
    if (array.includes(number)) {
        array.filter(element => {
            if (element === number) {
                counter += number;
            };
        });
    } else {
        return null
    }
    return counter;
};


let factors = number => {
    arr = []
    if (number > 0) {
        for (let i = number - 1; i >= 0; i--) {
            console.log
            // if (number % 2 === 0){
            //     arr.push(number)
            // };
        };
    } else if (number <= 0) {
        return [];
    } return arr;
}

function callOtherFuncion(nameOfFunction) {
    console.log("Wywołuję inną funkcję, którą mam jako paramter");

    const randomNumber1 = 10;
    const randomNumber2 = 20;
    nameOfFunction(randomNumber1, randomNumber2)
}

let stairs = {
    step: 0,
    up: function () {
        this.step += 1;
    },
    down: function () {
        this.steo -= 1;
    },
    view: function () {
        console.log(this.step)
    }
};

class Tree {
    constructor(type) {
        this.type = type;
    }
    // bloom(){
    //     console.log(this.type, "I am blooming!")
    // }
}

Tree.prototype.bloom = function () {
    console.log(this.type, "I am blooming!");
}

var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1)
};

function map(f, a) {
    var result = [],
        i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result
}

map(function (x) {
    return x * x * x
});

var newFunc;
if (num === 0) {
    newFunc = function (theObject) {
        theObject.make = "Coca-Cola"
    }
}

function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}

function getResult(name, score) {

    function add() {
        return name + "scored" + score;
    }
    return add();
}


function loop(x) {
    if (x >= 10)
        return loop(x + 1);
}


function treeScan(node) {
    if (node == null)
        return;
    else
        for (var i = 0; i < node.childNodes.length; i++) {
            treeScan(node.childNodes[i]);
        }
}


function foo(i) {
    if (i < 0)
        return (`Liczba ${i} mniejsz od zero`);
    console.log('begins:' + i);
    foo(i - 1);
    console.log('ends' + i);

}

function outside(x) {
    function inside(y) {
        return x + y;
    }
}

function a(x) {
    function b(y) {
        function c(z) {
            console.log(x + y + z);
        }
    }
}


function outside() {
    var x = 10;
    function inside(x) {
        return x;
    }
    return inside;
}


var pet = function (name) {
    var getName = function () {
        return name;
    }
    return getName;
}

var setSex = function (newSex) {
    if (typeof newSex == "string" &&
        (newSex.toLowerCase() == "male" ||
            newSex.toLowerCase() == "female")) {
        sex = newSex;
    }
}

function myConcat(separator) {
    var result = ""
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result
}


function multiplyAdvanced(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

function multiplyNamedParameter(a, b = 1) {
    return a * b;
}

function multiply(multiplier, ...List) {
    return List.map(x => multiplier * x);
}

function Person() {
    this.age = 0;
    setInterval(function growUp() {
        this.age++;
    }, 1000);
}


function showMessage(text) {
    if (text === undefined) {
        text = 'empty message'
    }
    alert(text)
}

function showMessage2(text) {
    text = text || 'empty';
}

function showCount(count) {
    alert(count ?? "unknown");
}

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Please provide permission from your parents.")
    }
}

70

let welcome = (age < 18) ?
    () => console.log("Baby") :
    () => console.log("Adult")

function something() {
    this.shape = "Triange",
        this.material = "Plastic",
        this.message = function () {
            console.log(this.material + this.shape + "id bad for environment")

            function inneroSomething() {
                console.log(this.shape);
            }
        }
    inneroSomething();
}

let argumentsRead = function (arguments) {
    console.log(arguments)
}

movieEntrance((age) => {
    if (age >= 12) {
        console.log("You can enter this movie")
    } else {
        console.log("You cannot enter this film")
    };
});


// 75


