import { TipsList } from './TipsList.js'


let tips = TipsList()
console.log(tips)


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".tankTips")


parentHTMLElement.innerHTML = TipsList()