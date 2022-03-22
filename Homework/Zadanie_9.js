const artists = [
    {
        artist: "Michał Anioł",
        country: "Włochy",
        type: ["rzeźba", "malarstwo", "fresk"],
        genre: ["autoportret", "akt", "sceny religijne"],
        period: ["Renesans", "Barok"],
    },
    {
        artist: "Piotr Michałowski",
        country: "Polska",
        type: ["malarstwo", "rysunek"],
        genre: ["portret", "autoportret", "animalistyka", "batalistyka"],
        period: "Romantyzm",
    },
    {
        artist: "Emil Nolde",
        country: "Niemcy",
        type: ["grafika", "malarstwo", "akwarela"],
        genre: ["portret", "autoportret", "pejzaż", "martwa natura"],
        period: "Ekspresjonizm",
    },
    {
        artist: "Aleksander Gierymski",
        country: "Polska",
        type: ["malarstwo", "rysunek"],
        genre: ["portret", "sceny rodzajowe", "pejzaż", "nokturn"],
        period: "Realizm",
    },
    {
        artist: "Albrecht Durer",
        country: "Niemcy",
        type: ["grafika", "malarstwo", "akwarela", "rysunek"],
        genre: ["portret", "autoportret", "pejzaż"],
        period: "Renesans",
    },
    {
        artist: "Caravaggio",
        country: "Włochy",
        type: ["malarstwo", "rysunek"],
        genre: ["portret", "sceny religijne", "martwa natura", "sceny rodzajowe"],
        period: ["Manieryzm"],
    },
    {
        artist: "Giovanni Lorenzo Bernini",
        country: "Włochy",
        type: ["architektura", "rzeźba", "malarstwo"],
        genre: ["portret", "autoportret", "sceny religijne", "sceny mitologiczne"],
        period: "Barok",
    },
    {
        artist: "Józef Chełmoński",
        country: "Polska",
        type: ["ilustracja", "rysunek", "malarstwo"],
        genre: ["portret", "animalistyka", "pejzaż", "sceny rodzajowe"],
        period: "Realizm",
    },
    {
        artist: "Vincent van Gogh",
        country: "Holandia",
        type: ["malarstwo", "rysunek", "akwarela"],
        genre: ["autoportret", "pejzaż", "martwa natura"],
        period: ["Postimpresjonizm", "Ekspresjonizm"],
    },
    {
        artist: "Paul Gauguin",
        country: "Francja",
        type: ["malarstwo", "ceramika", "rzeźba"],
        genre: ["portret", "pejzaż", "sceny rodzajowe", "autoportret"],
        period: "Ekspresjonizm",
    },
];


const akwarelaPejzaz = artists.filter(artist => artist.type.includes("akwarela") && artist.genre.includes("pejzaż")).map(artist => artist.artist);
console.log(akwarelaPejzaz)

const polishArtists = artists.filter(artist => artist.country === "Polska").flatMap(artist => artist.genre);
console.log(polishArtists)


const periods = artists.filter(arists => !arists.genre.includes("autoportret")).flatMap(artist => artist.period);
console.log(periods)