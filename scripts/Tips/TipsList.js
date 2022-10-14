import { getTips } from './database.js'

export const TipsList = () => {
    let htmlString = ``
    let tips = getTips()

    for (const tip of tips) {
    htmlString += `<li>${tip.copy}</li>`
    }
    return htmlString
}