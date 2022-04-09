function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function (a, b) { return a - b; });
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

function change(str) {
    return str.split('').map(charSwap).join('');
}

function charChange(char) {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}


function p4ngr4m(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (var i = 0; i < str.length; i++) {
            var s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }

        return false
    }

    return true
}

function letterCombination(str) {
    var summO = 0, summX = 0,
        str = str.toLowerCase(),
        xoArr = str.match(/[xo]/g);
    if (xoArr == null) return true;
    for (var i = 0; i < xoArr.length; i++) {
        if (xoArr[i] === "x") {
            summO += 1;
        } else if (xoArr[i] === "o") {
            summX += 1;
        }
    };
    if (summO === summX) return true;
    else return false;
}

function odd_or_even(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function numbers() {
    const liczba = Number(prompt(`Podaj liczbe:`));
    const imie = prompt(`Podaj imie:`);

    console.log(`Liczba: ${liczba}\tTyp danych: ${typeof (liczba)}`);
    console.log(`Imie: ${imie}\tTyp danych: ${typeof (imie)}`);
}

function nameGiven() {
    const imie = prompt(`Podaj imie:`);
    console.log(`Podane imie: ${imie}`);
}

function yearOfBirth() {
    const rokUrodzenia = prompt(`Podaj date urodzenia: `, `DD-MM-RRRR`);

    console.log(rokUrodzenia);
}

function cases() {
    const liczba_1 = Number(prompt(`Podaj pierwszą liczbę: `));
    const znak = prompt(`Podaj znak prostej operacji matematycznej: `, `+, -, *, /`);
    const liczba_2 = Number(prompt(`Podaj drugą liczbę: `));
    let wynik;

    switch (znak) {
        case '+':
            wynik = liczba_1 + liczba_2;
            break;
        case '-':
            wynik = liczba_1 - liczba_2;
            break;
        case '*':
            wynik = liczba_1 * liczba_2;
            break;
        case '/':
            wynik = liczba_1 / liczba_2;
            break;
        default:
            console.log(`Podano zly znak`);
    }
    console.log(`${liczba_1} ${znak} ${liczba_2} = ${wynik}`);
}

var smallAndBigCharacters = s => ![...s].reduce((t, v) => t + ((v = (v.charCodeAt() - 24) % 32) ? v - 23 ? 0 : -1 : 1), 0)

function trapez() {
    const podstawa_a = 8, podstawa_b = 3, wysokosc = 5;
    let poleTrapezu;

    poleTrapezu = (((podstawa_a + podstawa_b) * wysokosc) / 2);
    console.log(`Pole trapezu o nastepujacych podstawach ${podstawa_a} cm oraz ${podstawa_b} cm i wysokosci ${wysokosc} cm wynosi ${pole_trapezu} cm^2`);
}

function averageFunction() {
    const a = 10, b = 13, c = 25;

    console.log(`Srednia z liczb: ${a}, ${b}, ${c} wynosi: ${(a + b + c) / 3}`);
}

function pierwiastekKwadratowy() {
    const liczba = 16;

    console.log(`Pierwiastek kwadratowy z liczby ${liczba} wynosi: ${Math.sqrt(liczba)}`);
}

function checking_even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


function pierwiastekSześcienny() {
    const liczba = 27;

    console.log(`Pierwiastek szescienny w liczby ${liczba} wynosi: ${Math.cbrt(liczba)}`);
}

function wartośćBezwzględna() {
    const x = -5;
    const y = 6;

    console.log(`Wartosc bezwzgledna z ${x} wynosi: ${Math.abs(x)}`);
    console.log(`Wartosc bezwzgledna z ${y} wynosi: ${Math.abs(y)}`);
}

function zaokrąglenie() {
    const x = 4.5;
    const y = 5.3;

    console.log(`x: ${x}, y: ${y}`)
    console.log(`Zaokraglenie liczb do gory: ${Math.ceil(x)}, ${Math.ceil(y)}`);
    console.log(`Zaokraglenie liczb do dolu: ${Math.floor(x)}, ${Math.floor(y)}`);
}

function delta() {
    const a = 1, b = 3, c = -4;
    let delta, x1, x2;

    delta = (b * b) - (4 * a * c);
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log('Rozwiazania rownania kwadratowego x^2 + 3x - 4 = 0');
    console.log(`x1: ${x1}`);
    console.log(`x2: ${x2}`);
}

function stopaProcentowa() {
    const kwota = 20000, stopaProcentowa = 0.02, kapitalizacja = 4;
    let wartosc_koncowa;

    wartosc_koncowa = kwota * Math.pow((1 + stopaProcentowa), kapitalizacja);
    console.log(`Wartosc koncowa inwestycji wynosi: ${wartosc_koncowa} PLN`);
}



function condition() {
    const warunek1 = 9 > 2;
    const warunek2 = 5 > 7;

    console.log(`Wartosc wyrazenia logicznego 9 > 2 : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego 5 > 7 : ${warunek2}`);
}

function condition2() {
    const warunek1 = 5 !== 0;
    const warunek2 = 4 !== 4;

    console.log(`Wartosc wyrazenia logicznego 5 != 0 : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego 4 != 0 : ${warunek2}`);
}

function condition3() {
    const warunek1 = (3 > 2) && (6 < 4);
    const warunek2 = (4 > 2) && (7 > 3);

    console.log(`Wartosc wyrazenia logicznego (3 > 2) && (6 < 4) : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego (4 > 2) && (7 > 3) : ${warunek2}`);
}

function condition4() {
    const warunek1 = (15 > 13) || (4 < 9);
    const warunek2 = (5 < 4) || (24 > 26);

    console.log(`Wartosc wyrazenia logicznego (15 > 13) || (4 < 9) : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego (5 < 4) || (24 > 26) : ${warunek2}`);
}

function sumArray20(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
        : 0
}

function evenOdd(number) {
    if (number % 2 === 0)
        return "Even"
    else
        return "Odd"
}

function numbersNumber() {
    let liczba1 = 15, liczba_2 = 10;
    let temp;

    console.log(`Pierwsza liczba przed zamiana: ${liczba1}`);
    console.log(`Druga liczba przed zamiana: ${liczba2}`);

    temp = liczba1;
    liczba1 = liczba2;
    liczba2 = temp;

    console.log(`Pierwsza liczba po zamiana: ${liczba1}`);
    console.log(`Druga liczba po zamiana: ${liczba2}`);
}

function length99() {
    const dlugoscSznurka = 60, dlugoscKawalka = 7;
    let iloscKawalkow, resztkaSznurka;

    iloscKawalkow = Math.floor(dlugoscSznurka / dlugoscKawalka);
    resztkaSznurka = dlugoscSznurka % dlugoscKawalka;

    console.log(`Ilosc utworzonych kawalkow po ${dlugoscKawalka} cm ze sznurka o dlugosci ${dlugosc_sznurka} cm : ${ilosc_kawalkow} sztuk`);
    console.log(`Resztka sznurka: ${dlugoscSznurka} cm`);

}

const abFunction = str => (str.match(/A/gi) || []).length == (str.match(/B/gi) || []).length;

function inkrementacjaDekrementacja() {
    let liczba = 5;

    console.log(`Liczba: ${liczba}`);
    liczba++;
    console.log(`Liczba po inkrementacji: ${liczba}`);
    liczba--;
    console.log(`Liczba po dekrementacji: ${liczba}`);

}

function potęgowanie() {
    const liczba = 5, wykladnik = 3;
    console.log(`${liczba} ^ ${wykladnik} = ${liczba ** wykladnik}`);
}

function bmiCounter() {
    const patrykWaga = 83, patrykWysokosc = 1.86;
    const kubaWaga = 65, kubaWysokosc = 1.75;

    let patryk_bmi = patryk_waga / (patrykWysokosc * patrykWysokosc);
    let kuba_bmi = kuba_waga / (kubaWysokosc * kubaWysokosc);

    console.log(`Dane Patryka - waga: ${patrykWaga} kg, wysokosc: ${patrykWysokosc} m`);
    console.log(`BMI Patryka: ${Math.round(patrykBmi * 100) / 100}`);
    console.log(`Dane Kuby - waga: ${kubaWaga} kg, wysokosc: ${kubaWysokosc} m`);
    console.log(`BMI Kuby: ${Math.round(kubaBmi * 100) / 100}`);

}

function trueFalse(number) {
    return number & 1 ? 'True' : 'False';
}

function spalanie() {
    const benzyna = 5.21, diesel = 4.95;
    const pojazd1Spalanie = 8, pojazd2Spalanie = 7.5;

    console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd1Spalanie * benzyna) * 100) / 100} PLN`);
    console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd2Spalanie * diesel) * 100) / 100} PLN`);
}

function funkcjaWarunkowa() {
    const liczba = -17;

    if (liczba < 0) {
        console.log('Wartosc zmiennej jest ujemna');
    }
}

function dodatnieZmienne() {
    const liczba1 = 4, liczba2 = 15;

    if (liczba1 > 0 && liczba2 > 0) {
        console.log('Wartosci zmiennych sa dodatnie');
    }
}

const sumArraY = $ => !$ ? 0 : $.sort((a, b) => a - b).slice(1, -1).reduce((acc, el) => acc + el, 0)

function parzysteNieparzyste() {
    const liczba = 23;

    if (liczba % 2 === 0) {
        console.log('Wartosc zmiennej jest parzysta');
    } else {
        console.log('Wartosc zmiennej jest nieparzysta');
    }
}

function wiekKuby() {
    const wiekKuby = 21;

    if (wiekKuby >= 18) {
        console.log('Kuba jest pelnoletni');
    } else {
        console.log('Kuba nie jest pelnoletni');
    }
}

function checkNumber(number) {
    if (number % 2 === 0) {
        return "True";
    }
    return "False";
}


function porównianieLiczb() {
    const a = -15, b = 22, c = 7;

    if (a > b && a > c) {
        console.log(`Liczba a(${a}) jest najwieksza`);
    } else if (b > a && b > c) {
        console.log(`Liczba b(${b}) jest najwieksza`);
    } else if (c > a && c > b) {
        console.log(`Liczba c(${c}) jest najwieksza`);
    }
}

function rokPrzestepny() {
    const rok = 2025;

    if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) {
        console.log(`Rok ${rok} jest przestepny`);
    } else {
        console.log(`Rok ${rok} nie jest przestepny`);
    }
}


function dodatnieUjemne() {
    const liczba = -22;

    if (liczba > 0) {
        console.log(`Zadeklarowana liczba(${liczba}) jest dodatnia`);
    } else if (liczba < 0) {
        console.log(`Zadeklarowana liczba(${liczba}) jest ujemna`);
    } else if (liczba === 0) {
        console.log('Zadeklarowana liczba to 0');
    }
}


function triangleCheck() {
    const a = 60, b = 60, c = 60;
    let suma;

    suma = a + b + c;
    if (suma === 180 && a > 0 && b > 0 && c > 0) {
        console.log(`Trojkat(${a}, ${b}, ${c}) jest poprawny`);
    } else {
        console.log(`Trojkat(${a}, ${b}, ${c}) nie jest poprawny`)
    }

}

const rightWrong = n => ["right", "wrong"][n & 1];


function BmiToWeightToHeight() {
    const patrykWaga = 83, patrykWysokosc = 1.86;
    const kubaWaga = 65, kubaWysokosc = 1.75;

    let patrykBmi = patrykWaga / (patrykWysokosc * patrykWysokosc);
    let kubaBmi = kubaWaga / (kubaWysokosc * kubaWysokosc);

    console.log(`Dane Patryka - waga: ${patrykWaga} kg, wysokosc: ${patrykWysokosc} m`);
    console.log(`BMI Patryka: ${Math.round(patrykBmi * 100) / 100}`);
    console.log(`Dane Kuby - waga: ${kubaWaga} kg, wysokosc: ${kubaWysokosc} m`);
    console.log(`BMI Kuby: ${Math.round(kubaBmi * 100) / 100}`);

    if (patrykBmi > kubaBmi) {
        console.log(`Wskaznik BMI Patryka jest wiekszy od wskaznika BMI Kuby o ${Math.round((patrykBmi - kubaBmi) * 100) / 100}`);
    } else {
        console.log(`Wskaznik BMI Kuby jest wiekszy od wskaznika BMI Patryka o ${Math.round((kubaBmi - patrykBmi) * 100) / 100}`);
    }

    function benzineDiesel() {

        const benzyna = 5.21, diesel = 4.95;
        const pojazd_a_spalanie = 8, pojazd_b_spalanie = 7.5;

        console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd_a_spalanie * benzyna) * 100) / 100} PLN`);
        console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd_b_spalanie * diesel) * 100) / 100} PLN`);

        const pojazd_a_koszt_550_km = 5.5 * pojazd_a_spalanie * benzyna;
        const pojazd_b_koszt_550_km = 5.5 * pojazd_b_spalanie * diesel;

        console.log(`Koszt przejechania 550 km dla pojazdu A: ${Math.round((pojazd_a_koszt_550_km) * 100) / 100} PLN`);
        console.log(`Koszt przejechania 550 km dla pojazdu B: ${Math.round((pojazd_b_koszt_550_km) * 100) / 100} PLN`);

        if (pojazd_a_koszt_550_km > pojazd_b_koszt_550_km) {
            console.log(`Koszt przejechania 550 km jest tansze dla pojazdu A niz dla pojazdu B o ${Math.round((pojazd_a_koszt_550_km - pojazd_b_koszt_550_km) * 100) / 100} PLN`);
        } else {
            console.log(`Koszt przejechania 550 km jest tansze dla pojazdu B niz dla pojazdu A o ${Math.round((pojazd_b_koszt_550_km - pojazd_a_koszt_550_km) * 100) / 100} PLN`);
        }

    }

    function ArraySum(array) {
        if (array) {
            array.sort(function (a, b) { return a - b });
            var newAry = array.slice(1, -1)
            return newAry.reduce(function (acc, val) { return acc + val }, 0);
        } else {
            return 0;
        }
    }

    function enlargeringFunction(string) {
        return string.replace(/[A-Z]/g, function (c) { return " " + c; });
    }


    function fruits() {
        const owoce = ['Banan', 'Kiwi', 'Winogorono', 'Arbuz', 'Jabłko',
            'Pomarańcza', 'Granat', 'Mango', 'Melon', 'Cytryna'];
        const warzywa = ['Marchewka', 'Ogórek', 'Rzodkiewka', 'Cebula',
            'Kapusta', 'Szczypiorek', 'Fasolka'];

        console.log(`Ilosc elementow w tablicy o nazwie owoce: ${owoce.length}`);
        console.log(`Ilosc elementow w tablicy o nazwie warzywa: ${warzywa.length}`);
    }


    function carsNumber() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo'];

        console.log(`Tablica samochodow: ${samochody}`);

        samochody.pop();
        samochody.push('Mazda');

        console.log(`Tablica samochodow: ${samochody}`);
    }

    function carsTables() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo'];

        console.log(`Tablica samochodow: ${samochody}`);

        samochody.shift();
        samochody.unshift('Mazda');

        console.log(`Tablica samochodow: ${samochody}`);
    }

    function obst() {
        const warzywa = ['Marchewka', 'Ogórek', 'Rzodkiewka', 'Cebula',
            'Kapusta', 'Szczypiorek', 'Fasolka'];

        console.log(`Indeks elementu o nazwie Cebula: ${warzywa.indexOf('Cebula')}`);

    }

    function samocodySplice() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

        console.log(`Tablica samochodow: ${samochody}`);

        samochody.splice(2, 2);

        console.log(`Tablica samochodow: ${samochody}`);
    }

    function wagenModellen() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

        console.log(`Tablica samochodow: ${samochody}`);
        samochody[2] = 'Opel';
        samochody[4] = 'Nissan';
        console.log(`Tablica samochodow: ${samochody}`);
    }


    function sumowanieTablic(array) {
        if (array == null || array.length < 2) {
            return 0;
        }
        var sum = 0;
        var max = array[0];
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            max = max < array[i] ? array[i] : max;
            min = min > array[i] ? array[i] : min;
            sum += array[i];
        }
        sum -= (max + min);
        return sum;
    }

    combinationOfSigns = (str) => !(str.split(/[aA]/).length - str.split(/[bB]/).length);

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

    function randomP4ngr4m(string) {
        const letters = string.toLowerCase().match(/[a-z]/g);
        const alphabet = [...new Set(letters)]
        return alphabet.length === 26;
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

    const functionToUpper = string => {
        return [...string].map((char) => {
            return (char === char.toUpperCase()) ? ` ${char}` : char;
        }).join('');
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

    function signsCombination(str) {
        return str = str.toLowerCase(), str.split("X").length == str.split("D").length
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

    function evaluateToP4ngram(string) {
        return string
            .replace(/[^a-z]/gi, '')
            .toLowerCase()
            .split('')
            .filter(function (e, p, a) { return a.indexOf(e) == p })
            .sort()
            .join('').length == 26;
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

    const stringSplit = str => str
        .toLowerCase()
        .split('')
        .reduce((acc, char) => (acc + ({ x: 1, o: -1 }[char] || 0)), 0) === 0

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

    let welcome = (age < 18) ?
        () => console.log("Baby") :
        () => console.log("Adult")

    function CD(str) {
        str = str.toLowerCase();
        return (str.match(/c/g) || []).length === (str.match(/d/g) || []).length;
    }

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

    function alphabeticalControl(str) {
        var alphabet = ['a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j',
            'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z'
        ];
        str = str.toLowerCase();
        for (var i = 0; i < alphabet.length; i++) {
            if (str.indexOf(alphabet[i]) < 0) {
                return false;
            }
        }
        return true
    }


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


    const job1Ref = document.getElementById("job1");
    const job2Ref = document.getElementById("job2");

    const promise = new Promise((resolve, reject) => {
        const handleJob = () => {
            console.log('it works 1')
            resolve()
            job1Ref.removeEventListener('click', handleJob);
        }

        job1Ref.addEventListener('click', handleJob);

    })

    promise.then(() => {
        job2Ref.addEventListener("click", () => {
            console.log('it works')
        })
    })

    const driversArray = ['Nikkie_Lauda', 'Robert_Kubica', 'Michael_Schumacher', "Luis_Hammilton"]

    const drivers = function drivers() {
        array.forEach(driver => {
            console.log(`Jednym z najpopularniejszy kierowców formuły jeden jest ${driver}`)
        });
    }

    function pangr$am(string) {
        let str = string.toLowerCase()
        let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
        for (let i = 0; i < alpha.length; i++) {
            if (str.indexOf(alpha[i]) < 0) {
                return false
            }
        }
        return true
    }

    const polishDriver = driversArray.filter(array => array.includes.driver('Robert_Kubica'));
    function greetings(driver) {
        if (driver === 'Robert_Kubica') {
            console.log('Jesteś najlepszym polskim kierowcą rajdowym')
        }
    }
    const englishDriver = driversArray.filter(array => array.includes.driver('Luis_Hamilton'));
    function truth(driver) {
        if (driver === 'Luis_Hamilton') {
            console.log('Vettel zawsze będzie lepszy')
        }
    }
    const germanDriver = driversArray.filter(array => array.includes.driver('Michael_Schumacher'));
    function allTime(driver) {
        if (driver === 'Michael_Schumacher') {
            console.log('Kierwoca wszechczasów')
        }
    }
    const finnishDriver = driversArray.filter(array => array.includes.driver('Nikkie_Lauda'));
    function allTimeSecond(driver) {
        if (driver === 'Nikkie_Lauda') {
            console.log('You are all time second driver')
        }
    }

    const AS = str => {
        let x = (str.match(/a|A/g) || []).length;
        let o = (str.match(/s|S/g) || []).length;
        return x === o;
    }


    const animals = ['dog', 'elephant', 'lion', 'tiger', 'zebra', 'cheetah']

    const fastestAnimals = []

    function addAnimal(animal) {
        if (animal === 'cheetah') {
            fastestAnimals.push('cheetah')
        }
    }

    const bigAnimals = []

    function biggestAnimal(animal) {
        if (animal === 'elephant') {
            bigAnimals.push('elephant')
        }
    }

    const friendlyAnimals = []

    function animalFriend(animal) {
        if (animal === 'dog') {
            friendlyAnimals.push('dog')
        }
    }

    const kingAnimals = []

    function jungleKing(animal) {
        if (animal === 'lion') {
            kingAnimals.push('lion')
        }
    }

    const stripedAnimals = []

    function jungleAnimal(animal) {
        if (animal === 'tiger' && animal === 'zebra') {
            stripedAnimals.push('tiger', 'zebra')
        }
    }

    function notFast(animal) {
        if (animal != 'cheetah') {
            console.log('Na pewno nie jest to najszybsze zwierzę')
        }
    }

    function notBig(animal) {
        if (animal != 'elephant') {
            console.log('Na pewno nie jest to najwięszke zwierzę')
        }
    }


    function notFriendly(animal) {
        if (animal != 'dog') {
            console.log("Na pewno nie jest to najlepszy przyjaciel człowieka")
        }
    }

    function notJungleKind(animal) {
        if (animal != 'lion') {
            console.log('Na pewno nie jest to król dżungli')
        }
    }

    function notStrippedAnimal(animal) {
        if (animal != 'tiger' && animal != 'Zebra') {
            console.log('Na pewno nie jest to pasiaste zwierze')
        }
    }


    const cars = ['Marcedes', 'Fiat', 'Saab', 'Seat', 'AlfaRomeo', 'Audi']

    const germanCars = []

    function germanCarsAdd(car) {
        if (car == 'Merceds' && car === 'Audi') {
            germanCars.push('Mercedes', 'Audi')
        }
    }

    const italianCars = []

    function pushItalianCars(car) {
        if (car == 'Fiat' && car == 'AlfaRomeo') {
            italianCars.push('Fiat', 'AlfaRomeo')
        }
    }

    const sweedishCars = []

    function pushSweedishCars(car) {
        if (car === 'Saab') {
            sweedishCars.push('Saab')
        }
    }

    const spanishCars = []

    function pushSpanishCars(car) {
        if (car === 'Seat') {
            spanishCars.push('Seat')
        }
    }


    function notGermanCars(car) {
        if (car != 'Mercedes' && car != 'Audi') {
            console.log('Na pewno nie jest to niemiecki samochód')
        }
    }

    function notItalianCars(car) {
        if (car != 'Fiat' && car != 'AlfaRomeo') {
            console.log('Na pewno nie jest to włoski samochód')
        }
    }

    function notSweedishCars(car) {
        if (car != 'Saab') {
            console.log('Na pewno nie jest to szwedzki samochód')
        }
    }

    function notSpanishCars(car) {
        if (car != 'Seat') {
            console.log('Na pewno nie jest to hiszpański samochód')
        }
    }

    function greet() {
        console.log("Welcome")
    }
    setTimeout(() => {
        greet
    }, 2000);


    function loggedInUser() { };
    function greetUser(userName) {
        console.log('Welcome' + userName + '!');
    }
    setTimeout(() => {
        greet, loggedInUser
    }, 2000);


    function _clear_() {
        clearTimeout(timerId);
    }

    function generateOutput(aConcise) {
        if (aConcise)
            parent.generateConciseOutput();
        else
            parent.generateOutput();
    }
    window.setTimeout(() => {
        generateOutput
    }, 1000, true);


    const doubleTimeout = "timeoutCondensed "

    setTimeout(() => {
        setTimeout(() => {
            console.log('timeoutCondensed')
        }, 5000);
    }, 50000);

    const promise1 = newPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo')
        }, timeout);
    }, 2000);

    promise1.then((value) => {
        console.log(value);
    })

    console.log(promise1)


    const promise2 = newPromise((resolve, reject) => {
        setTimeout((function1) => {
            resolve("Success!")
        }, 30000);
    })

    promise2.then((successMessage) => {
        console.log("Yay!" + successMessage)
    })

    'use strict';
    var promiseCount = 0;

    function testPromise() {
        let thisPromiseCount = ++promiseCount;

        let log = document.getElementById('log');
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
            ') Started (<small>Sync code started</small>)<br/>');

        // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
        let p1 = new Promise(
            // The resolver function is called with the ability to resolve or
            // reject the promise
            (resolve, reject) => {
                log.insertAdjacentHTML('beforeend', thisPromiseCount +
                    ') Promise started (<small>Async code started</small>)<br/>');
                // This is only an example to create asynchronism
                window.setTimeout(
                    function () {
                        // We fulfill the promise !
                        resolve(thisPromiseCount);
                    }, Math.random() * 2000 + 1000);
            }
        );

        p1.then(
            function (val) {
                log.insertAdjacentHTML('beforeend', val +
                    ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
            })
            .catch(
                (reason) => {
                    console.log('Handle rejected promise (' + reason + ') here.');
                });

        log.insertAdjacentHTML('beforeend', thisPromiseCount +
            ') Promise made (<small>Sync code terminated</small>)<br/>');
    }


    const p4ngr4mat0r = string =>
        new Set(string.toLowerCase().replace(/[^a-z]/gi, ``)).size === 26;

    function BM(str) {
        if (str == "" || str == null) return true;
        str = str.toLowerCase();
        var list = str.split("");
        var xNum = 0;
        var oNum = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i] === 'B') {
                xNum++;
            }
            if (list[i] === 'M') {
                oNum++;
            }
        }
        if (xNum === oNum)
            return true;
        return false;
    }

    function successCallback(result) {
        console.log("Audio file ready at URL: " + result);
    }

    function failureCallback(error) {
        console.error("Error generating audio file: " + error);
    }

    createAudioFileAsync(audioSettings).then(successCallback, failureCallback);


    doSomething(function (result) {
        doSomethingElse(result, function (newResult) {
            doThirdThing(newResult, function (finalResult) {
                console.log('Got the final result: ' + finalResult);
            }, failureCallback);
        }, failureCallback);
    }, failureCallback);

    doSomething().then(function (result) {
        return doSomethingElse(result);
    })
        .then(function (newResult) {
            return doThirdThing(newResult);
        })
        .then(function (finalResult) {
            console.log('Gote the final result' + finalResult);
        })
        .catch(failureCallback);


    doSomething()
        .then(result => doSomethingElse(result))
        .then(newResult => doThirdThing(newResult))
        .then(finalResult => {
            console.log(`Gote the final result: ${finalResult}`);
        })
        .catch(failureCallback)

    new Promise((resolve, rejec) => {
        console.log('Initial');

        resolve();
    })
        .then(() => {
            throw new Error('Something failed');

            console.log('Do this')
        })
        .catch(() => {
            console.log('Do that');
        })

        .then(() => {
            console.log('Do this no matter what happened before');
        });


    try {
        const result1 = syncDoSomething();
        const newResult1 = syncDoSomethingElse(result);
        const finalResult = synDoThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch (error) {
        failureCallback(error);
    }

    async function foo() {
        try {
            const result1 = syncDoSomething();
            const newResult1 = syncDoSomethingElse(result);
            const finalResult = synDoThirdThing(newResult);
            console.log(`Got the final result: ${finalResult}`);
        } catch (error) {
            failureCallback(error);
        }
    }

    function loweringAndReplace(string) {
        const str = string.replace(/[^a-zA-Z]/gi, '').toLowerCase()
        const set = new Set([...str]);
        return set.size === 26;
    }


    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(10 * 1000).then(() => saySomething("10 seconds")).catch(failureCallback);


    Promise.all([func1(), func2(), func3()]).then(([result, result2, result3]) => []);

    [func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
        .then(result3 => { });

    const applyAsync = (acc, value) => acc.then(val);
    const composeAsync = (...funcs) => x => funcs.reduce(ApplyAsync, Promise.resolve(x));

    Promise.resolve().then(() => console.log(2));
    console.log(1);

    const wait1 = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(0).then(() => console.log(4));
    Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
    console.log(1);


    const promise3 = new Promise(function (resolve, reject) {
        console.log("Promise Callback");
        resolve();
    }).then(function (result) {
        console.log("Promise Callback (.then)");
    });

    setTimeout(() => {
        console.log("event-loop cycle: Promise (fulfilled)", promise)
    }, 0);

    console.log("Promise (pedning)", promise);

    doSomethingCritical()
        .then(result => doSomethingOptional(result)
            .then(optionalResult => doSomethingExtraNice(optionalResult))
            .catch(e => { }))
        .then(() => moreCriticalStuff())
        .catch(e => console.error("Critical failure: " + e.message));

    doSomething().then(function (result) {
        doSomethingElse(result)
            .then(newResult => doThirdThing(newResult));
    }).then(() => doFourthThing());


    doSomething().then(function (result) {
        return doSomethingElse(result);
    })
        .then(newResult => doThirdThing(newResult))
        .then(() => doFourthThing())
        .catch(error => console.log(error));

    // 188

    const promise4 = new Promise((resolve, reject) => {
        if (successfully_completed) {
            resolve("Everyting OK")
        } else {
            reject("Not OK");
        }
    });

    const promise5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise/SetTimeout function");
        }, 1000);
    });

    function doAnything() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("SetTimeout nested in promise function");
            }, 1000);
        });
    }

    doAntyhing()
        .then(res => {
            console.log(res)
        });


    function loadUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("User data")
            }, 2000);
        });
    }

    function loadBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Books data")
            }, 30000);
        });
    }

    function loadPets() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("pets data");
            }, 10000);
        });
    }

    Promise.all([
        loadUser(),
        loadBooks(),
        loadPets()
    ])
        .then(res => {
            console.log(res);
        });
    // stąd
    const Promisse = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ok"), 1000);
    })

    Promisse
        .then(res => {
            console.log(res);
            return res + "2"
        })
        .then(res => {
            console.log(res);
            return res + "3"
        })
        .then(res => {
            console.log(res);
        })

    doSomething1()
        .then(function (result) {
            return doSomethingElse1(result);
        })
        .then(newResult => doThirdThing1(newResult))
        .then(() => doFourthThing1())
        .catch(error => console.log(error))


    function search() {
        function divisibilityByTwo(liczba) {
            if (liczba % 2 === 0) {
                console.log(`Przekazana liczba(${liczba}) jest podzielna przez 2`);
            } else {
                console.log(`Przekazana liczba(${liczba}) nie jest podzielna przez 2`);
            }
        }

        divisibilityByTwo(5);
    }

    function letterAlphabetCheck(string) {
        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z'];
        string = string.toLowerCase();
        for (var i = 0; i < abc.length; i++) { if ((string.indexOf(abc[i]) === -1)) return false; }
        return true;
    }

    function trybPralki(numerTrybu = 0) {
        switch (numerTrybu) {
            case 0:
                console.log('Wybrano tryb: Szybkie pranie');
                break;
            case 1:
                console.log('Wybrano tryb: Mieszane');
                break;
            case 2:
                console.log('Wybrano tryb: Bawelna');
                break;
            case 3:
                console.log('Wybrano tryb: Biale');
                break;
            case 4:
                console.log('Wybrano tryb: Sportowe');
                break;
            default:
                console.log('Nie ma takiego trybu!');
        }
    }

    trybPralki();
    trybPralki(2);
    trybPralki(5);


    function promien(d) {
        return (d / 2);
    }

    function poleKola() {
        const PI = 3.14;
        console.log(`Pole kola o promieniu ${promien(8)} wynosi: ${PI * promien(8) * promien(8)}`);
    }

    poleKola();


    function search() {
        const multiplication = function () {
            const a = 6, b = 9;
            console.log(`Wynik mnozenia ${a} * ${b} = ${a * b}`);
        }

        multiplication();
    }

    function search() {
        const multiplication = function (a, b) {
            console.log(`Wynik mnozenia ${a} * ${b} = ${a * b}`);
        }

        multiplication(5, 9);
    }

    const divisibilityByThree = function (liczba) {
        if (liczba % 3 === 0) {
            console.log(`Przekazana liczba(${liczba}) jest podzielna przez 3`);
        } else {
            console.log(`Przekazana liczba(${liczba}) nie jest podzielna przez 3`);
        }
    }

    divisibilityByThree(15);

    const cenaBiletu = function (cena_biletu, znizka = 0) {
        if (znizka === 0) {
            console.log(`Cena biletu normalnego wynosi: ${cena_biletu} PLN`);
        } else if (znizka > 0 && znizka < 100) {
            console.log(`Cena biletu ze znizka(${znizka}%) wynosi: ${cena_biletu - (cena_biletu * (znizka / 100))} PLN`);
        } else {
            console.log(`Podano bledna wartosc dla znizki`);
        }
    }

    cenaBiletu(56);
    cenaBiletu(71, 21);
    cenaBiletu(39, -5);


    const PI = 3.14;


    const arrowExchange = str =>
        str.replace(/\w/g, val => val[`to${val < `a` ? 'Low' : 'Upp'}erCase`]());

    const polePodstawyStozka = function (promien) {
        return PI * promien * promien;
    }

    const poleBoczneStozka = function (promien, dlugosc) {
        return PI * promien * dlugosc;
    }

    const poleCalkowiteStozka = function () {
        console.log(`Pole stozka wynosi: ${polePodstawyStozka(5) + poleBoczneStozka(5, 7)}`);
    }

    poleCalkowiteStozka();


    const print = () => {
        console.log('JavaScript ES6: funkcja strzalkowa');
    }

    print();


    const division = () => {
        const a = 10, b = 4;
        console.log(`Wynik dzielenia ${a} / ${b} = ${a / b}`);
    }

    division();

    const division2 = (a, b) => {
        console.log(`Wynik dzielenia: ${a} / ${b} = ${a / b}`);
    }

    division(15, 4);

    const divisibility = (liczba, dzielnik) => {
        if (liczba % dzielnik === 0) {
            console.log(`Przekazana liczba(${liczba}) jest podzielna przez ${dzielnik}`);
        } else {
            console.log(`Przekazana liczba(${liczba}) nie jest podzielna przez ${dzielnik}`);
        }
    }

    divisibility(7, 4);
    divisibility(20, 5);


    const cenaBiletuu = (cena_biletu, rodzaj_znizki = 'normalny') => {
        switch (rodzaj_znizki) {
            case 'normalny':
                console.log(`Cena biletu normalnego: ${cena_biletu} PLN`);
                break;
            case 'studencki':
                console.log(`Cena biletu ze znizka studencka(51%) wynosi: ${cena_biletu - (cena_biletu * 0.51)} PLN`);
                break;
            case 'seniora':
                console.log(`Cena biletu ze znizka seniora(30%) wynosi: ${cena_biletu - (cena_biletu * 0.30)} PLN`);
                break;
            case 'weterana wojennego':
                console.log(`Cena biletu ze znizka weterana wojennego(37%) wynosi: ${cena_biletu - (cena_biletu * 0.37)} PLN`);
                break;
            default:
                console.log(`Nie ma takiej znizkki!`);
        }
    }

    cenaBiletu(32);
    cenaBiletu(32, 'studencki');
    cenaBiletu(32, 'weterana wojennego');


    function pangramage(string) {
        return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
    }

    const poleKwadratu = (bok) => {
        return bok * bok;
    }

    const poleSzescianu = () => {
        console.log(`Pole szescianu wynosi: ${poleKwadratu(4) * 6}`);
    }

    poleSzescianu();

    function malarze() {
        array.forEach(malarz => {
            if (artists.type.includes("malarstwo")) {
                print("Wielki artysta to: " + malarz)
            }
        });
    }

    const lowFuel = (distanceToPump, mpg, fuelLeft) => {
        if (mpg * fuelLeft >= distanceToPump) {
            return true;
        } else {
            return false;
        }
    };

    function malarze2() {
        array.forEach(artist => {
            if (artist in artists) {
                print("Proszę zapamiętać tego artystę: " + artist)
            }
        });
    }



    function malarzePejzaysci() {
        array.forEach(artist => {
            if (artist.genre.includes("pejzaż")) {
                console.log(artist + "Ten artysta zajmował się pejzażem")
            };
        });
    };

    function even_or_odd(number) {
        return number % 2 ? "Odd" : "Even"
    }


    function martwaNatura() {
        array.forEach(artist => {
            if (artist.genre.includes("martwa natura")) {
                console.log(arists + "Tego malarza znamy z malowania martwej natury")
            }
        })
    }



    function malujaPortret() {
        array.forEach(artist => {
            if (artist.genre.includes("portret")) {
                console.log(artist + "malował również portrety")
            }
        })
    }

    const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        return distanceToPump / mpg <= fuelLeft
    };

    function malerAutoportret() {
        array.forEach(artist => {
            if (artist.genre.includes("autoportret")) {
                console.log(artist + "malował autoportrety")
            }
        })
    }

    function malarzeAnimalisci() {
        array.forEach(artist => {
            if (artist.genre.includes("animalistyka")) {
                console.log(artist + "był malarzem animalistą")
            }
        })
    }



    function malarzeBatalisci() {
        array.forEach(artist => {
            if (artist.genre.includes("batalistyka")) {
                console.log(arist + "malował sceny batalistyczne")
            }
        });
    }

    function trueCheck(a, x) {
        var result = false;
        for (i = 0; i < a.length; i++) {
            if (a[i] == x) {
                result = true;
            }

        }
        return result;
    };
    check([1, "hey", false], 1);

    function exchanging(str) {
        return str.replace(/./g, c => c < "a" ? c.toLowerCase() : c.toUpperCase())
    }

    function actPainter() {
        array.forEach(artist => {
            if (artist.genre.includes("akt")) {
                console.log(artist + "malował również akty")
            }
        });
    }

    function religiousPainters() {
        array.forEach(artist => {
            if (artist.genre.includes("sceny religijne")) {
                console.log(artist + "malował również sceny religijne")
            }
        });
    }

    function scenes() {
        array.forEach(artist => {
            if (artist.genre.includes("sceny rodzajowe")) {
                console.log(artist + "malował sceny rodzajowe")
            }
        });
    }

    function nokturn() {
        array.forEach(artist => {
            if (artist.genre.includes("sceny rodzajowe")) {
                console.log(artist + "malował nokturny")
            }
        });
    }
    function checkingTrue(a, x) {
        return a.indexOf(x) > -1 ? true : false;
    };

    function mitological() {
        array.forEach(artist => {
            if (artist.genre.includes("sceny mitologiczne")) {
                console.log(artist + "malował sceny mitologiczna")
            }
        });
    }

    function malerzeGraficy() {
        array.forEach(artist => {
            if (artist.type.includes("grafika")) {
                console.log(artist + "Tego artystę zaliczamy do grona grafików")
            }
        })
    }

    function checking(a, x) {
        return a.includes(x);
    };

    function sculpture() {
        array.forEach(artist => {
            if (artist.type.inclued("rzeźba")) {
                console.log(artist + "ten artysta był rzeźbiarzem")
            }
        });
    }


    function fuelLow(distanceToPump, mpg, fuelLeft) {
        return (distanceToPump > mpg * fuelLeft) ? false : true;
    }

    function painting() {
        array.forEach(artist => {
            if (artist.type.includes("malarstwo")) {
                console.log(artist + "to artyści malarze")
            }
        });
    }

    function fresk() {
        array.forEach(artist => {
            if (artist.type.includes("fresk")) {
                console.log(artist + " :artyści tworzący freski")
            }
        })
    }

    function painting() {
        array.forEach(artist => {
            if (artist.type.includes("rysunek")) {
                console.log(artist + " :artysta tworzący rysunki")
            }
        })
    }

    function akwarela() {
        array.forEach(artist => {
            if (artist.type.includes("akwarela")) {
                console.log(artist + " : artysta tworzący w technica akwarela")
            }
        });
    }

    function OE(str) {
        let countX = countStr(str, 'O');
        let countO = countStr(str, 'E');
        return countX === countO;
    }

    function countStr(s, match) {
        let regex = new RegExp(match, "gi");
        return (s.match(regex) || []).length;
    }

    function architecture() {
        array.forEach(artist => {
            if (artist.type.includes("architektura")) {
                console.log(artist + ": był architektem")
            }
        });
    }

    function sculpture() {
        array.forEach(artist => {
            if (artist.type.includes("rzeźba")) {
                console.log(artist + " : był rzeźbiarzem")
            }
        })
    }

    function countingArrays(arrayOfItems) {
        var array = arrayOfItems.reduce((a, b) => a + (b === true ? 1 : 0), 0)
        return array;
    }

    function ilustracja() {
        array.forEach(artist => {
            if (artist.type.includes("ilustracja")) {
                console.log(artist + " : był ilustratorem")
            }
        })
    }

    function ceramika() {
        array.forEach(artist => {
            if (artist.type.includes("ilustracja")) {
                console.log(artist + ": był ilustratorem")
            }
        })
    }

    function period() {
        array.forEach(artist => {
            if (artist.period.includes("Renesans")) {
                console.log(artist + " : artyści renesansowym")
            }
        })
    }

    function period2() {
        array.forEach(artist => {
            if (artist.period.includes("Barok")) {
                console.log(artist + ": artysći barokowi")
            }
        })
    }

    function period3() {
        array.forEach(artist => {
            if (artist.period.includes("Romantyzm")) {
                console.log(artist + ": artyści romantyzmu")
            }
        })
    }

    const countJourneys = arrayOfJourneys => arrayOfJourneys.filter(s => s).length;

    function period4() {
        array.forEach(artist => {
            if (artist.period.includes("Ekspresjonizm")) {
                console.log(artist + ": artyści ekspresjonizmu")
            }
        })
    }

    function period5() {
        array.forEach(artist => {
            if (artist.period.includes("Realizm")) {
                console.log(artist + ": artyści realizmu")
            }
        })
    }

    function period6() {
        array.forEach(artist => {
            if (artist.period.includes("Manieryzm")) {
                console.log(artist + ": artyści manieryzmu")
            }
        })
    }

    function period7() {
        array.forEach(artist => {
            if (artist.period.includes("Postimpresjonizm")) {
                console.log(artist + ": artyści postimpresjonizmu")
            }
        })
    }


    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function (previousValue,
        currentValue, index, array) {
        return previousValue + currentValue;
    })


    var total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function (a, b) {
        return a + b;
    });


    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
        return a.concat(b);
    });

    let countMonkeys = x => x.filter(s => s).length;


    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function (callback) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var t = Object(this), len = t.length >>> 0, k = 0, value;
            if (arguments.length == 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }
                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        };
    }

    function tauchen(str) {

        return str.split('').map(item => item === item.toUpperCase()
            ? item.toLowerCase()
            : item.toUpperCase()).join('');
    }


    const quarterfinalistsTable = [];

    function addition1() {
        quarterfinalistsTable.forEach(finalist => {
            quarterfinalistsTable.push();
        });
    }

    function alphabetCheck(str) {
        var s = str.toLowerCase();
        var letters = "zqxjkvbpygfwmucldrhsnioate";
        for (var i = 0; i < 26; i++)
            if (s.indexOf(letters.charAt(i)) == -1)
                return false;
        return true;
    }


    const promise99 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ok"), 1000);
    });

    promise
        .then(res => {
            console.log(res);
            return res + "2";
        })
        .then(res => {
            console.log(res);
            return res + "3";
        })
        .then(res => {
            console.log(res);
        })


    function checkDataA() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("OK1"), 2000);
        });
    }

    function checkDataB() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("OK2"), 2000);
        });
    }

    function checkDataC() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("OK3"), 2000);
        });
    }

    checkDataA()
        .then(res => checkDataB())
        .then(res => checkDataC())
        .then(res => {
            console.log(res);
        });

    checkDataA()
        .then(checkDataB)
        .then(checkDataC)
        .then(res => {
            console.log(res);
        });


    function makeThings() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise, ");
            }, 2000);
        }).then(res => {
            return res + "first change"
        }).then(res => {
            return res + "second change"
        })
    }

    makeThings()
        .then(res => {
            console.log("outside: ", res);
        })



    function CD(str) {
        var sum = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() == 'C') sum++;
            if (str[i].toLowerCase() == 'D') sum--;
        }
        return sum == 0;
    }

    function loadData(countryName) {
        return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Http error: ${res.status}`);
                }
            })
    }

    loadData("Brazil")
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
}


function concatFunction() {
    const samochody1 = ['Audi', 'BMW', 'Mercedes'];
    const samochody2 = ['Volvo', 'Mazda', 'Fiat']

    const samochody = samochody1.concat(samochody2);
    console.log(`Utworzona tablica: ${samochody}`);
}

function AB(str) {
    return str.replace(/A/ig, '').length == str.replace(/B/ig, '').length
}


function liczbyFill() {
    const liczby = [1, 2, 3, 4, 5, 6, 7, 8];

    console.log(`Tablica liczb: ${liczby}`);
    liczby.fill(4);
    console.log(`Tablica liczb: ${liczby}`);

}

function counterOfDogs(arrayOfDogs) {
    var count = 0;

    arrayOfDogs.forEach(function (dog) {
        if (dog)
            count++;
    });

    return count;
}

function tablicaLiczby() {
    const liczby = [1, 2, 3, 4, 5, 6, 7, 8];

    console.log(`Tablica liczb: ${liczby}`);
    liczby.fill(4, 4);
    console.log(`Tablica liczb: ${liczby}`);
    liczby.fill(2, 2, 5);
    console.log(`Tablica liczb: ${liczby}`);
}

function carsFunction() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

    const small = samochody.filter(samochody => samochody.length <= 4);
    const large = samochody.filter(samochody => samochody.length > 4);

    console.log(`Krotkie nazwy: ${small}`);
    console.log(`Dlugie nazwy: ${large}`);
}


function liczbySearch() {
    const liczby = [4, 6, 9, 23, 56, 14, 75];
    const liczba = liczby.find(temp => temp > 15);

    console.log(`Znaleziona liczba: ${liczba}`);
}

function carsValue() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];
    const valueOne = samochody.includes('BMW');
    const valueTwo = samochody.includes('Nissan');

    console.log(`Czy element 'BMW' znajduje sie w tablicy? ${valueOne}`);
    console.log(`Czy element 'Nissan' znajduje sie w tablicy? ${valueTwo}`);
}

function carsThrid() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

    console.log(`Wypisywanie elementow przed okresleniem separatora: ${samochody}`);
    console.log(`Wypisywanie elementow po okresleniu separatora: ${samochody.join('-')}`);
}

function numbersFunction() {
    const liczby = [4, 6, 9, 23, 56, 14, 75];

    console.log(`Tablica glowna: ${liczby}`);
    const mapLiczby = liczby.map(temp => temp + 4);
    console.log(`Nowa tablica: ${mapLiczby}`);
}

function XD(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/D/gi, '');
    return a.length === b.length;
}


function sortFunction() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];
    const liczby = [4, 6, 9, 23, 56, 14, 75];

    samochody.sort();
    console.log(`Posortowana tablica samochodow przy pomocy metody sort(): ${samochody}`);
    liczby.sort();
    console.log(`Posortowana tablica liczb przy pomocy metody sort(): ${liczby}`);
}

function arrayOfSigns() {
    const tablicaZnakow = Array.from('Mercedes');

    console.log(`Utworzona tablica: ${tablicaZnakow}`);
}


function search() {
    const samochod1 = {
        marka: 'Audi',
        model: 'A5',
        spalanie: 8
    };
    console.log(samochod1.marka, samochod1.model, samochod1.spalanie);
}

function bicycleFunction() {
    const rower = new Object();
    rower.model = 'Kross';
    rower.rozmiarRamy = 'L';
    rower.rozmiarKola = 27.5;
    console.log(rower.model, rower.rozmiarRamy, rower.rozmiarKola);
}

const toChangeSth = str => [...str].map(el => el[`to${el < 'a' ? 'Low' : 'Upp'}erCase`]()).join('')

function modelFunction() {
    function Smartfon(model, wyswietlacz, pamiec_ram) {
        this.model = model;
        this.wyswietlacz = wyswietlacz;
        this.pamiec_ram = pamiec_ram;
    }
    const smartfon = new Smartfon('Samsung Galaxy A32', 6.4, 4);
    console.log(smartfon.model);
    console.log(smartfon.wyswietlacz);
    console.log(smartfon.pamiec_ram);
}

function prototypeWatch() {
    const zegarekPrototyp = {
        marka: 'Tommy Hilfiger',
        mechanizm: 'Kwarcowy',
        cena: 756
    }
    const zegarek = Object.create(zegarekPrototyp);
    console.log(zegarek.marka);
    console.log(zegarek.mechanizm);
    console.log(zegarek.cena);
}


function seanumbers99() {
    const liczby = {
        liczba_1: 4,
        liczba_2: 8
    };

    console.log(`Wartosc pierwszej zmiennej obiektu o nazwie liczby: ${liczby.liczba_1}`);
    console.log(`Wartosc drugiej zmiennej obiektu o nazwie liczby: ${liczby.liczba_2}`);
}

function combinationOfStars(str) {
    return str.toLowerCase().split('*').length === str.toLowerCase().split('**').length;
}

function namesFunction() {
    const imiona = {
        kuba: 'Kuba',
        maciej: 'Maciej',
        bartek: 'Bartek'
    };

    console.log(`Wszystkie imiona obiektu o nazwie imiona:
-${imiona.kuba}
-${imiona.maciej}
-${imiona.bartek}`);
}

function counterSheep(arr) {
    return arr.filter(Boolean).length;
}


function kowlaskiFunction() {
    const janKowalski = {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        rok_urodzenia: 1987,
        miejscowosc: 'Warszawa',
        prawo_jazdy: true
    };

    console.log(`Dane osobowe: 
Imie: ${janKowalski.imie}
Nazwisko: ${janKowalski.nazwisko}
Rok urodzenia: ${janKowalski.rok_urodzenia}
Miejscowosc: ${janKowalski.miejscowosc}
Prawo jazdy: ${janKowalski.prawo_jazdy}`)
}

// 340

function numbers99() {
    const liczby = {
        liczba_1: 5,
        liczba_2: 15
    };

    const liczba = liczby.liczba_1 + liczby.liczba_2;
    console.log(`${liczby.liczba_1} + ${liczby.liczba_2} = ${liczba}`);

}

const downFall = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === '-').length === str.filter(x => x === '^').length;
}

const exercise_1 = data.filter(station => !(Object.values(station).includes(null)));
console.log(exercise_1)

const exercise_2 = data.map((stacja) => (stacja.kierunek_wiatru)).reduce((acc, cu) =>
    acc + cu) / data.length;
console.log(exercise_2)

const exercise_3 = data.filter(stacja => stacja.cisnienie > 1030).map(stacja => stacja.temperatura);
console.log(exercise_3)


const films = directors.flatMap(director => director.movies)
    .filter(movies => movies.distributor === "Warner Bros.")
    .map(movie => movie.title);
console.log(films)

const thrillers = directors.filter(director => director.birth > 1960)
    .flatMap(director => director.movies)
    .filter(movie => movie.genre === "Thriller")
    .flatMap(movies => movies.title);
console.log(thrillers)

const childern_name = directors.flatMap(director => director.children)
    .filter(name => name.startsWith("F"));
console.log(childern_name)

const task_1 = coffeeShop.filter(location => location.street === "Długa"
    && location.city === "Kraków").map(coffeeShop => coffeeShop.name);
console.log(task_1)

const taks_2 = coffeeShop.flatMap(coffeeShop => coffeeShop.coffee)
    .filter(coffeeShop => coffeeShop.coffee.includes("iceLatte")).length
console.log(task_2)

const task_3 = coffeeShop
    .filter(coffeeShop => coffeeShop.coffeePrice[0].espresso > 10)
    .map(coffeeShop => coffeeShop.name);
console.log(task_3)

const Earth = planets.filter(planet => planet.name === 'Earth')[0].relativeMass
const task1 = planets.filter(planet =>
    planet.relativeMass > Earth
    && planet.mostFamousMoons.some(moon => moon.startsWith('G')))
    .map(planet => planet.name);
console.log(task1);

function sheepCounter(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;

    return num;
}

const averageMoons = planets.reduce((acc, planet) => acc + planet.moons, 0) / planets.length;
const result2 = planets.filter(planet => planet.moons > data).map(planet => planet.name);
console.log(result2)

const result3 = planets.filter(planet => planet.hasPlanetaryRings === false && p.name.endsWith('s'))
    .map(planet => planet.name)
console.log(result3)

const studios = games.filter(games => games.studio.startsWith('G')).map(game => game.title).join(', ');
console.log(studios)

const distinctGames = games.filter(game => game.platforms.lenght >= 2).map(game => game.title);
console.log(distinctGames)

const titles = games.filter(game => !game.genre.includes('RPG') && game.year > 2015).map(game => game.title);
console.log(titles)

const animalsFLat = animals.flatMap(animal => Object.values(animal)[0]);

const carnivores = animalsFLat.filter(animal => animal.diet === 'Carnivore'
    && animal.habitat.includes('Grassland')).map(animal => animal.name)

console.log(carnivores)

const animals2 = animalsFLat.filter(animal => animal.weightInKg > 1
    && animal.lifespanInYears >= 10).map(animal => animal.name);

console.log(animals2)

const animal3 = animalsFLat.filter(animal => animal.diet === 'Carnivore'
    && animal.sizeInCm > 50)
    .map(animal => animal.name);

console.log(animal3)

const driversMercedes = data.filter((driver) => driver.teams.includes('Mclaren'))

const wins = data.reduce((acc, driver) => acc + driver.wins, 0)
    / driversMercedes.length

console.log(wins)

const result22 = data.filter(driver => driver.wins === 0
    && driver.teams.length === 1)
    .map(driver => driver.name)

console.log(result2)

const result33 = data.filter(driver =>
    driver.teams.includes('Renault') &&
    driver.wins >= 10)
    .map(driver => driver.name);

console.log(result3)

const japanCars = data.filter(car => car.country === 'japan').map(car => [car.brand, car.year])
console.log(japanCars)

const redCars = data.filter(car => car.colorway.includes('red')).map(car => car.brand)

console.log(redCars)

const carbonCars = data.filter(car => car.colorway.includes('carbon') && car.year > 2001).map(car => [car.brand, car.country])

console.log(carbonCars)

const akwarelaPejzaz = artists.filter(artist => artist.type.includes("akwarela") && artist.genre.includes("pejzaż")).map(artist => artist.artist);
console.log(akwarelaPejzaz)

const polishArtists = artists.filter(artist => artist.country === "Polska").flatMap(artist => artist.genre);
console.log(polishArtists)


const periods = artists.filter(arists => !arists.genre.includes("autoportret")).flatMap(artist => artist.period);
console.log(periods)


[3, 1, 2].sort((a, b) => a - b);

[1, 2, 3].forEach(el => console.log(el));


function random(min, max, cb) {
    const nr = Math.floor(Math.random() * (max - min + 1) + min);
    cb(nr);
}

function renderPage() {
    getFirstData(res => {
        getAnotherData1(res => {
            getAnotherData2(res => {
                getAnotherData3(res => {

                });
            });
        });
    });
}

function exchange(str) {
    return str.split('').map(function (v) {
        return v.charCodeAt(0) > 96 ? v.toUpperCase() : v.toLowerCase();
    }).join('');
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

function render() {
    const lefr = parseInt(div.style.left) + 1;
    div.style.left = lefr + "px"
    requestAnimationFrame(render) // płynność animacji
}


function generateCovers() {
    for (let i = 0; i < src.length; i++) {
        const img = document.createElement("img");
        img.classList.add("cover-book");
        img.src = src[i] + ".jpg";
        document.body.append(img)
    }
}


function magic({ a, a: { b } = {} } = {}) {
    console.log(a, b)
}

magic({ a: { b: 42 } })
magic()

async function getCurrency(url) {
    const usd = await fetch(`${url}usd?format=json`)
    const euro = await fetch(`${url}eur?format=json`)


    const json = await Promise.race([usd, euro])

    const data = json.json()
    return data
}

getCurrency('https://api.nbp.pl/api/exchangerates/rates/a/').then(e => console.log(e))

const loadFromLocalStorage = (one = false) => {
    const dataText = localStorage.getItem('userHappyNumbers');
    if (dataText !== null) {
        const data = JSON.parse(dataText);
        return one ? [data[data.length - 1]] : data
    }

    return []
};

const saveToLocalStorage = (data) => {
    if (!Array.isArray(data)) {
        data = [...loadFromLocalStorage(), data]
    }
    localStorage.setItem('userHappyNumbers', JSON.stringify(data))
}

const showResult = (resultRef) => {
    resultRef.innerText = loadFromLocalStorage(true);
}

const deleteFromLocalStorage = (one = false) => {
    saveToLocalStorage(loadFromLocalStorage().slice(0, -1));
}

const createTag = ({ tagName = 'div', tagAttrs, tagText, tagId, tagEvt, tagClass } = {}) => {
    const node = document.createElement(tagName);

    if (tagAttrs !== undefined) {
        tagAttrs.forEach(({ name, value }) => {
            node.setAttribute(name, value)
        });
    }

    if (tagClass !== undefined) {
        tagClass.forEach((name) => {
            node.classList.add(name);
        })
    }

    if (tagText !== undefined) {
        const nodeText = document.createTextNode(tagText);
        node.appendChild(nodeText)
    }

    if (tagId !== undefined) {
        node.id = tagId;
    }

    if (tagEvt !== undefined) {
        tagEvt.forEach(({ type, cb }) => {
            node.addEventListener(type, cb)
        })
    }

    return node;
}

const handleSave = (event, inputRef, resultRef) => {
    if (inputRef.value !== '') {
        saveToLocalStorage(inputRef.value);
        inputRef.value = '';
        showResult(resultRef)
    }
}

const handleDelete = (event, resultRef) => {
    deleteFromLocalStorage();
    showResult(resultRef);
}


function multiplyAdvaced(a, b) {
    if (!a || !b || typeof (a) != "number" || typeof (b) != "number") {
        return 0;
    }
    return a * b;
}

const sumArray = (numbers) => (
    numbers && numbers.length > 1
        ? numbers
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((sum, number) => sum + number, 0)
        : 0
);


function check(a, x) {
    return a.includes(x);
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
};

function even_or_odd(number) {
    return number % 2 ? 'Odd' : 'Even';
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.reduce((acc, sheep) => sheep === true ? acc + 1 : acc, 0);
}

function countSheeps(arrayOfSheep) {
    var num = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;

    return num;
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}


function makeNegative(num) {
    return num <= 0 ? num : -num
}

function past(h, m, s) {
    return (h * 60 * 60 + m * 60 + s) * 1000;
}

const cockroachSpeed = s => Math.floor(s / 0.036);

function cockroachSpeed1(s) {
    return Math.floor(s * 30 / 1.08)
}

const countDays = arrayOfDays => arrayOfDays.filter(x => x == true).length

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
        if (n > 0) arr[0]++;
        if (n < 0) arr[1] += n;
        return arr;
    }), [0, 0];
}


function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    } return arr;
}

function removeUrlAnchor(url) {
    return url.spli('#')[0];
}

function sumDigits(numner) {
    return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}

function minMax(arr) {
    var a = arr.sort(function (a, b) { return a - b });
    return [a[0], a[a.lenght - 1]];
}

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

function array_diff(a, b) {
    return a.filter(function (x) { return b.indexOf(x) == -1; });
}

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}

function highAndLow(numbers) {
    numbers = numbers.split(' ').sort((a, b) => Number(a) - Number(b))
    return [numbers[numbers.length - 1], numbers[0]].join(' ')
}

function stringExchange(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    });
}

function panda(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}

function XO(str) {
    var a = str.replace(/x/gi, '');
    var b = str.replace(/o/gi, '');
    return a.length === b.length;
}

function breakFunction(string) {
    return string.replace(/[A-Z]/g, function (c) { return " " + c; });
}

function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}

function countDemons(arrayOfDemons) {
    var count = 0;
    arrayOfDemons.map(function (current) {
        if (current) {
            count += 1;
        }
    });
    return count;
}


function swap(str) {
    return str.split('').map(function (v) {
        return v.charCodeAt(0) > 96 ? v.toUpperCase() : v.toLowerCase();
    }).join('');
}

function spacify(str) {
    return str.split("").join(" ");
}

const validateWord = $ => {
    $ = [...$.toLowerCase()].reduce((acc, el) => {
        acc[el] = acc[el] + 1 || 1;
        return acc
    }, {})
    return [...new Set(Object.values($))].length === 1
}

function maxDiff(list) {
    if (!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
}

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1];
};

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

function camelCase(str) {
    let res = [];
    for (var i = 0; i < str.length; i += 2) res.push(`${str[i] + (str[i + 1] || '_')}`)
    return res;
}

const solve = arr => [...new Set(arr.reverse())].reverse()

function containAllRots(strng, arr) {
    return [...strng].map((_, i) => strng.substr(i) + strng.slice(0, i)).every(x => arr.includes(x));
}

function nbDig(n, d) {
    var o = '';
    for (var i = 0; i <= n; i++) {
        o += Math.pow(i, 2);
    }
    return o.split(d).length - 1
}

function countItems(arrayOfThings) {
    var num = 0;
    for (i = 0; i < arrayOfThings.length; i++) {
        if (arrayOfThings[i]) {
            num += 1;
        }
    }
    return num;
}


const filterLongWords = (sentence, n) =>
    sentence.split(` `).filter(val => val.length > n);


var total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}


function mojaFunkcja(x, y, z) { }
var argumenty = [0, 1, 2];
mojaFunkcja.apply(null, argumenty);

function applyAndNew(constructor, args) {
    function partial() {
        return constructor.apply(this, args);
    };
    if (typeof constructor.prototype === "object") {
        partial.prototype = Object.create(constructor.prototype);
    }
    return partial;
}


function myConstructor() {
    console.log("arguments.length: " + arguments.length);
    console.log(arguments);
    this.prop1 = "val1";
    this.prop2 = "val2";
};

function fetchVideo() {
    controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal })
        .then(function (response) {
            console.log('Download complete', response);
        })
        .catch(function (e) {
            console.log('Download error: ' + e.message);
        });
}


sensor.addEventListener('reading', () => {
    // model is a Three.js object instantiated elsewhere.
    model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener('error', error => {
    if (event.error.name == 'NotReadableError') {
        console.log("Sensor is not available.");
    }
});

let acl = new Accelerometer({ frequency: 60 });
acl.addEventListener('reading', () => {
    console.log("Acceleration along the X-axis " + acl.x);
    console.log("Acceleration along the Y-axis " + acl.y);
    console.log("Acceleration along the Z-axis " + acl.z);
});

const stringReplacing = string => string.replace(/([A-Z])/g, ' $1');

function pangramator(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}

function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }


var min = function (list) {
    return Math.min(...list);
}
var max = function (list) {
    return Math.max(...list);
}

function findDifference(a, b) {
    let getA = a.reduce((a, b) => a * b)
    let getB = b.reduce((a, b) => a * b)

    return Math.abs(getA - getB)

}

function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    return [...new Set(newArr)].sort((a, b) => a - b)
}

function calculateAge(birth, year) {
    if (birth - year === 1) {
        return `You will be born in 1 year.`
    } else if (birth - year > 1) {
        return `You will be born in ${Math.abs(year - birth)} years.`
    } else if (year - birth === 1) {
        return `You are 1 year old.`
    } else if (year - birth > 1) {
        return `You are ${year - birth} years old.`
    } else if (year - birth === 0) {
        return `You were born this very year!`
    }

}

function getPlanetName(id) {
    var name;
    switch (id) {

        case 1:
            return 'Mercury'

        case 2:
            return 'Venus'

        case 3:
            return 'Earth'

        case 4:
            return 'Mars'

        case 5:
            return 'Jupiter'

        case 6:
            return 'Saturn'

        case 7:
            return 'Uranus'

        case 8:
            return 'Neptune'

    }

    return name;
}

function testEven(n) {
    return (n % 2 == 0) ? true : false
}
testEven(1)

function solution(a, b) {
    return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
}

function move(pos, roll) {
    return pos + roll * 2
}

function setAlarm(emp, vac) {
    return (emp == true && vac == false) ? true : false
}

function checkForFactor(base, factor) {
    return (base % factor === 0) ? true : false
}
checkForFactor(653, 7)


function unusualFive() {
    return ['a', 'a', 'a', 'a', 'a'].length
}

function getRealFloor(n) {

    if (n <= 0) {
        return n
    } else if (n < 13) {
        return n - 1
    } else if (n > 13) {
        return n - 2
    }
}

function sumStr(a, b) {
    return (Number(a) + Number(b)).toString()
}

function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}


function well(test) {

    let num = test.filter(a => a == 'good').length

    if (num > 0 && num <= 2) {
        return 'Publish!'
    } else if (num > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }

}

function pipeFix(num) {

    let arr = []
    let stop = num.pop()

    if (num == false) {
        return [2]
    } else {
        for (let i = num[0]; i <= stop; i++) {
            arr.push(i)
        }
        return arr
    }
}

function updateLight(cur) {

    if (cur == 'green') {
        return 'yellow'
    } else if (cur == 'yellow') {
        return 'red'
    } else if (cur == 'red') {
        return 'green'
    }

}


function combat(health, damage) {
    return (health - damage < 0) ? 0 : health - damage
}


function mouthSize(animal) {
    return (animal.toLowerCase() === 'alligator') ? "small" : "wide"
}

function generateRange(min, max, step) {

    let arr = []

    for (i = min; i <= max; i += step) {
        arr.push(i)
    }

    return arr

}


String.prototype.isUpperCase = function () {

    return this
        .split('')
        .map(a => (a == a.toUpperCase()) ? true : false)
        .includes(false) ? false : true

}

function index(arr, n) {
    return (arr.length <= n) ? -1 : Math.pow(arr[n], n)
}

function removeEveryOther(arr) {
    return arr.filter((a, i) => i % 2 == 0)
}

function strCount(str, letter) {
    return str.split('').filter(a => a == letter).length
}

function twoSort(s) {
    return s.sort().shift().split('').map(a => a + '***').join('').slice(0, -3)
}

var find = function (string, array) {
    return (array.includes(string)) ? true : false
};

function hero(bullets, dragons) {
    return (bullets >= dragons * 2) ? true : false
}

function DNAtoRNA(dna) {
    return dna.split('').map(a => a.replace('T', 'U')).join('')
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld)
}

// 530