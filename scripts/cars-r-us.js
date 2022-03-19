// import functions from various modules to be utilized within this module. 
import { addCustomOrder } from './database.js'
import { Interiors } from './interiors.js'
import { PaintColors } from './paintColors.js'
import { Technologies } from './technologies.js'
import { Wheels } from './wheels.js'
import { Orders } from './orders.js'
import { Models } from "./vehiclemodels.js"
// create an event listener on the world document object
document.addEventListener(
    // set the event listener to trigger on a click event
    "click",
    (clickEvent) => {
        // declare an immutable varaible and set it equal to the target property of the clickevent
        const itemClicked = clickEvent.target
        // use an if conditional statement to see if the id property of the itemClicked is striclty
        // equal to the string of "orderButton"
        if (itemClicked.id === "orderButton") {
            // if the aboce condtional is true...
            addCustomOrder()


        }
    }
)

// export a function that returns a template literal with html code and expressions containing invoked
// functions. Those functions return their own html code. 
export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__interiors options">
                <h2>interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__paintColors options">
            <h2>paintColors</h2>
            ${PaintColors()}
            </section>
            <section class="choices__technologies options">
            <h2>technologies</h2>
            ${Technologies()}
            </section>
            </section>
            <section class="choices__wheels options">
            <h2>wheels</h2>
            ${Wheels()}
            </section>
            <section class="choices__models options">
            <h2>models</h2>
            ${Models()}
            </section>
            </article>
            
            <article>
            <button id="orderButton">Create Custom Order</button>
            </article>
            
            <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
            </article>
            `
        }
        /*
 
 
*/