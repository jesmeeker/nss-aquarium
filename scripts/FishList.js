// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    const htmlString = `<header class="title">Fish Inventory</header><br>
    <section class="fishItems">`

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishItems--image"><img src="${fish.photo}"  alt="${fish.species}" height="100px" class="fish_image"></section>
        <div class="fish_info">Name: ${fish.name}<br>
            Species: ${fish.species}<br>
            Length: ${fish.length}"<br>
            Harvest Location: ${fish.location}<br>
            Diet: ${fish.diet}</div>
        </section>`
    }

    return htmlString
}