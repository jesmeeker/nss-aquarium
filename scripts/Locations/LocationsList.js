import { getLocations } from './database.js'

export const LocationsList = () => {
    let htmlString = ``
    let locations = getLocations()

    for (const location of locations) {
    htmlString += `<li>${location.city}, ${location.country}</li>`
    }
    return htmlString
}