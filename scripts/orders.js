import { getInteriors, getPaintColors, getTechnologies, getWheels, getOrders, getVehicleModels } from "./database.js";

// ?declare a function? with an object as a parameter that will have an order-object as an argument.
// This function will contain nested functions that will return the id properties of the interior and 
// the order. ?That makes this a higher order function?
const buildOrderListItem = (order) => {
    // invoke the function that iterates through all of the interiors in the database array. 
    const interiors = getInteriors()
    // declare an immutable var and set it equal to a function with an argument that is an
    // array of objects(database.interior). The .find will return the orderId && the id property
    // of the interior. 
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

    let totalCost = foundInterior.price + foundPaintColor.price + foundTechnologies.price + foundWheels.price
    totalCost *= foundModel.priceMultiplier
    
    const costString = totalCost.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
        </li>
        `
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}