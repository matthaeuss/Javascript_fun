const animals = [
    {
      mammals: [
        {
          name: 'Eurasian Lynx',
          habitat: ['Grassland', 'Mountain', 'Taiga', 'Temperate Rainforest'],
          diet: 'Carnivore',
          sizeInCm: 130,
          weightInKg: 30,
          lifespanInYears: 25
        },
        {
          name: 'Red Fox',
          habitat: ['Desert', 'Grassland', 'Taiga', 'Woodland'],
          diet: 'Omnivore',
          sizeInCm: 90,
          weightInKg: 12,
          lifespanInYears: 5 
        }
      ]
    },
    {
      birds: [
        {
          name: 'Black-chinned Hummingbird',
          habitat: ['Grassland', 'Mountain', 'Woodland'],
          diet: 'Omnivore',
          sizeInCm: 8.5,
          weightInKg: 0.0035,
          lifespanInYears: 10
        },
        {
          name: 'Ferruginous Hawk',
          habitat: ['Grassland'],
          diet: 'Carnivore',
          sizeInCm: 70,
          weightInKg: 1.2,
          lifespanInYears: 20
        }
      ]
    },
    {
      reptlies: [
        {
          name: 'Alligator Snapping Turtle',
          habitat: ['Freshwater', 'Swamp'],
          diet: 'Omnivore',
          sizeInCm: 80,
          weightInKg: 80,
          lifespanInYears: 45
      },
        {
          name: 'Eyelash Viper',
          habitat: ['Tropical Rainforest'],
          diet: 'Carnivore',
          sizeInCm: 80,
          weightInKg: 0.225,
          lifespanInYears: 12 
        }
      ]
    },
    {
      amphibians: [
        {
          name: 'Axolotl',
          habitat: ['Freshwater'],
          diet: 'Carnivore',
          sizeInCm: 30,
          weightInKg: 0.225,
          lifespanInYears: 12
        }
      ]
    },
    {
      fish: [
        {
          name: 'Great Hammerhead',
          habitat: ['Coral Reef', 'Shallow Sea'],
          diet: 'Carnivore',
          sizeInCm: 500,
          weightInKg: 500,
          lifespanInYears: 30
      },
        {
          name: 'Leafy Seadragon',
          habitat: ['Shallow Sea'],
          diet: 'Carnivore',
          sizeInCm: 35,
          weightInKg: 0.112,
          lifespanInYears: 10
        }
      ]
    }
  ]

// Wy??wietl nazwy wszystkich mi??so??erc??w ??yj??cych na obszarach trawiastych
// Wy??wietl gdzie ??yj?? wszystkie zwierz??ta wa????ce powy??ej 1 kg i ??yj??ce co najmniej 10 lat
// Wy??wietl wszystkie zwierz??ta wszystko??erne wi??ksze ni?? 50cm

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