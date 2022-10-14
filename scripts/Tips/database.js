const database = {
    tips: [
        {
            id: 1,
            type: "Tank Cleaning",
            copy: "Make sure you clean your tank weekly."
        },
        {
            id: 2,
            type: "Water Salinity",
            copy: "Make sure you check your water daily."
        },
        {
            id: 3,
            type: "Tank Cleaning",
            copy: "Only use NFA approved products."
        },
        {
            id: 4,
            type: "Fish Diet",
            copy: "Feed your fish a consistent diet"
        }
    ]
} 

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}