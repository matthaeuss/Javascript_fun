const coffeeShop = [
    {
        name: "Fornir",
        street: "Długa",
        city: "Kraków",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 10,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Jordan Cafe",
        street: "Długa",
        city: "Kraków",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
        coffeePrice: [
            {
                espresso: 10,
                americano: 11,
                flatWhite: 14,
                capuccino: 13,
                latte: 15,
                mocha: 15,
                iceLatte: 14
            }
        ],
    },
    {
        name: "Iluzjon Art Cafe",
        street: "Rynek",
        city: "Sandomierz",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 8,
                americano: 10,
                flatWhite: 15,
                capuccino: 12,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Ministerstwo Kawy",
        street: "Marszałkowska",
        city: "Warszawa",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
        coffeePrice: [
            {
                espresso: 11,
                americano: 13,
                flatWhite: 14,
                capuccino: 15,
                latte: 16,
                mocha: 18,
                iceLatte: 18
            }
        ],
    },
    {
        name: "Magia Cafe Bar",
        street: "Długa",
        city: "Kraków",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 9,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Kawiarnia Kafka",
        street: "Oboźna",
        city: "Warszawa",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 11,
                flatWhite: 14,
                capuccino: 13,
                latte: 15,
                mocha: 15
            }
        ],
    }, {
        name: "Kawa",
        street: "Długa",
        city: "Gdańsk",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 10,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    }
]


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
