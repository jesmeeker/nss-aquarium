import { LocationsList } from './LocationsList.js'


let locations = LocationsList()
console.log(locations)


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".locationTips")


parentHTMLElement.innerHTML = LocationsList()