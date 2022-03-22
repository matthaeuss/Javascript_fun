const quarterfinalists = [
    {
        name: "Chelsea",
        country: "England",
        city: "London",
        titles: 6,
        coach: [
            {
                name: "Thomas Tuchel",
                nationality: "Germany",
                age: 48
            }
        ]
    },
    {
        name: "Manchester City",
        country: "England",
        city: "Manchester",
        titles: 7,
        coach: [
            {
                name: "Pep Guardiola",
                nationality: "Spain",
                age: 51
            }
        ]
    },
    {
        name: "Liverpool",
        country: "England",
        city: "Liverpool",
        titles: 19,
        coach: [
            {
                name: "Jurgen Klopp",
                nationality: "Germany",
                age: 54
            }
        ]
    },
    {
        name: "Real Madrid",
        country: "Spain",
        city: "Madrid",
        titles: 34,
        coach: [
            {
                name: "Carlo Ancelotti",
                nationality: "Italy",
                age: 62
            }
        ]
    },
    {
        name: "Villarreal",
        country: "Spain",
        city: "Vila-real",
        titles: 0,
        coach: [
            {
                name: "Unai Emery",
                nationality: "Spain",
                age: 50
            }
        ]
    },
    {
        name: "Atletico Madrid",
        country: "Spain",
        city: "Madrid",
        titles: 11,
        coach: [
            {
                name: "Diego Simeone",
                nationality: "Argentina",
                age: 51
            }
        ]
    },
    {
        name: "Bayern",
        country: "Germany",
        city: "Munich",
        titles: 31,
        coach: [
            {
                name: "Julian Nagelsmann",
                nationality: "Germany",
                age: 34
            }
        ]
    },
    {
        name: "Benfica",
        country: "Portugal",
        city: "Lisbon",
        titles: 37,
        coach: [
            {
                name: "Jorge Jesus",
                nationality: "Portugal",
                age: 67
            }
        ]
    }
]

const trainers = quarterfinalists.flatMap(club => club.coach);
const averageAge = trainers.reduce((acc, coach) => acc + coach.age, 0) / trainers.length
console.log(averageAge)

const englishClubs = quarterfinalists.filter(club => club.country === "England");
const mostCups = englishClubs.sort((a, b) => b.titles - a.titles).map(team => team.name)[0];
console.log(mostCups)

const nationalitiesOfTrainers = new Set(quarterfinalists.map((club) => club.coach[0].nationality))
console.log(nationalitiesOfTrainers)
