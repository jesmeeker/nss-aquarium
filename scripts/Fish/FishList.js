// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    // const fishes = getFish()
    // let orderedList = []
    // Start building a string filled with HTML syntax
    let htmlString = ``
    

    let holy = mostHolyFish()
    // orderedList.push(holy)

    for (const fish of holy) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishItems--image"><img src="${fish.photo}"  alt="${fish.species}" height="100px" class="fish_image"></section>
        <div class="fish_info">Name: ${fish.name}<br>
            Species: ${fish.species}<br>
            Length: ${fish.length}"<br>
            Harvest Location: ${fish.location}<br>
            Diet: ${fish.diet}</div>
        </section>`
    }

    let soldier = soldierFish()
    // orderedList.push(soldier)

    for (const fish of soldier) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishItems--image"><img src="${fish.photo}"  alt="${fish.species}" height="100px" class="fish_image"></section>
        <div class="fish_info">Name: ${fish.name}<br>
            Species: ${fish.species}<br>
            Length: ${fish.length}"<br>
            Harvest Location: ${fish.location}<br>
            Diet: ${fish.diet}</div>
        </section>`
    }

    let regular = nonHolyFish()
    // orderedList.push(regular)

    for (const fish of regular) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishItems--image"><img src="${fish.photo}"  alt="${fish.species}" height="100px" class="fish_image"></section>
        <div class="fish_info">Name: ${fish.name}<br>
            Species: ${fish.species}<br>
            Length: ${fish.length}"<br>
            Harvest Location: ${fish.location}<br>
            Diet: ${fish.diet}</div>
        </section>`
    }

    // Create HTML representations of each fish here
    // for (const fish of orderedList) {

    //     // Why is there a backtick used for this string?
    //     htmlString += `<section class="fishItems--image"><img src="${fish.photo}"  alt="${fish.species}" height="100px" class="fish_image"></section>
    //     <div class="fish_info">Name: ${fish.name}<br>
    //         Species: ${fish.species}<br>
    //         Length: ${fish.length}"<br>
    //         Harvest Location: ${fish.location}<br>
    //         Diet: ${fish.diet}</div>
    //     </section>`
    // }

    return htmlString
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishes = getFish()
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 ===0)
        holyFish.push(fish)

    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fishes = getFish()
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0)
        soldiers.push(fish)
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const fishes = getFish()
    const regularFish = []

    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        regularFish.push(fish)
        }
    }
    return regularFish
}

