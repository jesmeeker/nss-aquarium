const database ={
    fish: [
        {
            id: 1,
            name: "Dory",
            species: "Royal Blue Tang",
            length: 4.25,
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
            length: 2.9,
            location: "Sudan",
            diet: "Yummy Pellets",
            photo: "/photos/striped-damselfish.jpeg"
        }
    ]
} 

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}