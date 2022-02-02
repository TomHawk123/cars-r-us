import { getInteriors, getPaintColors, getTechnologies, getWheels, getOrders, getVehicleModels } from "./database.js";

// ¿declare a function? with an object as a parameter that will have an order-object (database.customOrder) as
//  an argument.
// This function will contain nested functions that will return the id properties of the interior and 
// the order. ?That makes this a higher order function?
const buildOrderListItem = (order) => {
    // invoke the function that iterates through all of the interiors in the database array. 
    const interiors = getInteriors()
    // declare an immutable var and set it equal to a function with an argument that is an
    // array of objects(database.interior). The .find will return the orderId && the id property
    // of the interior object in the interiors array. The ¿higher order function? will also contain
    // 
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    
    const paintColors = getPaintColors()
    const foundPaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )

    const wheels = getWheels()
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const technologies = getTechnologies()
    const foundTechnologies = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const models = getVehicleModels()
    const foundModel = models.find(
        (model) => {
            return model.id === order.modelId
        }
    )
    // declare a variable and set it equal to the sum of the price properties on the objects "found" with the
    // .find() method that iterates through the arrays of car objects
    let totalCost = foundInterior.price + foundPaintColor.price + foundTechnologies.price + foundWheels.price
    // concatenate the priceMultiplier property on the foundModel object. 
    totalCost *= foundModel.priceMultiplier
    /* The toLocaleString() method returns a string with a language sensitive representation of this date.
            The ¿new locales and options arguments (does that mean 'en-US')? let applications specify the language whose formatting conventions 
            should be used and customize the behavior of the function.
            In older implementations, which ignore the locales and options arguments, the locale used and the form of
            the string returned are entirely implementation-dependent. ¿What's the deal with the object being created?*/
    const costString = totalCost.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    })
    // ¿costString ¿function? will return a template literal with list item elements (opening and closing) with the
    // interpolated id property of the order and expression with the costString value. ?
    return `<li>
        Order #${order.id} cost ${costString}
        </li>
        `
}
/* exporting a function that will use the getOrders function to iterate the customOrders array in the database, which
is set to an empty object in the database array, and will return an HTML string */
export const Orders = () => {
    // invoke the getOrders function to iterate through customOrders array, ¿which is now holding the state of the 
    // customer selections when the custom event was triggered (i.e. button was clicked)?
    const orders = getOrders()
    // declare a var and set it equal to a string containing an unordered list HTML element
    let html = "<ul>"
    // decalre a var and set it equal to the buildOrderListItem on the orders array by iterating the item with the map
    // method. ¿Why is it I don't have to invoke the buildOrderListItem and why don't I have to pass it an argument?
    const listItems = orders.map(buildOrderListItem)
    // concatenate the html string with the listItems that were generated with the orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    // return the completed template literal of HTML
    return html
}

