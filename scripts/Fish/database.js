const database = {
    fish: [
        {
            id: 1,
            name: "Dory",
            species: "Royal Blue Tang",
            length: 5,
            location: "Australia",
            diet: "Yummy Pellets", 
            photo: "/photos/blue_tang.jpeg"
        },
        {
            id: 2,
            name: "Bubbles",
            species: "Yellow Tang",
            length: 3.75,
            location: "Australia",
            diet: "Yummy Pellets",
            photo: "/photos/yellow_tang.jpeg"
        },
        {
            id: 3,
            name: "Gill",
            species: "Moorish Idol",
            length: 4.5,
            location: "Africa",
            diet: "Yummy Pellets",
            photo: "/photos/moorish-idol.jpeg"
        },
        {
            id: 4,
            name: "Flo",
            species: "Striped Damselfish",
            length: 3,
            location: "Sudan",
            diet: "Yummy Pellets",
            photo: "/photos/striped-damselfish.jpeg"
        },
        {
            id: 5,
            name: "Nemo",
            species: "Juvenile Clown Fish",
            length: 3,
            location: "Australia",
            diet: "Yummy Pellets", 
            photo: "/photos/clownfish.jpeg"
        },
        {
            id: 6,
            name: "Marlin",
            species: "Clown Fish",
            length: 6,
            location: "Australia",
            diet: "Yummy Pellets",
            photo: "/photos/clownfish.jpeg"
        },
        {
            id: 7,
            name: "Gurgle",
            species: "Royal Gramma Basslet",
            length: 4.5,
            location: "Indian Ocian",
            diet: "Yummy Pellets",
            photo: "/photos/royal_gramma.jpeg"
        },
        {
            id: 8,
            name: "Bloat",
            species: "Puffer Fish",
            length: 4,
            location: "Hawaii",
            diet: "Yummy Pellets",
            photo: "/photos/pufferfish.jpeg"
        }
    ]
} 

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}