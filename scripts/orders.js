import { getInteriors, getPaintColors, getTechnologies, getWheels, getOrders, getVehicleModels } from "./database.js";


const buildOrderListItem = (order) => {
    const interiors = getInteriors()
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