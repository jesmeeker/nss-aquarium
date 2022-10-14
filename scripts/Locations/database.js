const database = {
    locations: [
        {
            id: 1,
            city: "Sydney",
            country: "Australia"
        },
        {
            id: 2,
            city: "Honolulu",
            country: "Hawaii, United States"
        },
        {
            id: 3,
            city: "Port Sudan",
            country: "Sudan"
        },
        {
            id: 4,
            city: "Cape Town",
            country: "South Africa"
        }
    ]
} 

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}