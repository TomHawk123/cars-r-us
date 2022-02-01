const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 750 },
        { id: 3, color: "Firebrick Red", price: 1000 },
        { id: 4, color: "Spring Green", price: 1250 },
    ],
    interiors: [
        { id: 1, material: 'Beige Fabric', price: 750 },
        { id: 2, material: 'Charcoal Fabric', price: 850 },
        { id: 3, material: 'White Leather', price: 1000 },
        { id: 4, material: 'Black Lether', price: 1250 },
    ],
    wheels: [
        { id: 1, style: '17-inch Pair Radial', price: 1000 },
        { id: 2, style: '17-inch Pair Radial Black', price: 1500 },
        { id: 3, style: '18-inch Pair Spoke Silver', price: 2000 },
        { id: 4, style: '18-inch Pair Spoke Black', price: 2500 },

    ],
    technologies: [
        { id: 1, package: 'Basic Package (basic sound system)', price: 2000 },
        { id: 2, package: 'Navigation Package (includes integrated navigation controls)', price: 2500 },
        { id: 3, package: 'Visibility Package (includes side and reat cameras)', price: 2500 },
        { id: 4, package: 'Ultra Package (includes navigation and visibility packages)', price: 4500 },

    ],
    vehicleModels: [
        { id: 1, model:"Car" , priceMultiplier: 1 },
        { id: 2, model: "SUV", priceMultiplier: 1.5 },
        { id: 3, model: "Truck", priceMultiplier: 2.25 }
    ],
    customOrders: [],
    orderBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColors.map((paintColor) => ({ ...paintColor }))
}

export const getInteriors = () => {
    return database.interiors.map((interior) => ({ ...interior }))
}

export const getWheels = () => {
    return database.wheels.map((wheel) => ({ ...wheel }))
}

export const getTechnologies = () => {
    return database.technologies.map((technology) => ({ ...technology }))
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}

export const getVehicleModels = () => {
    return database.vehicleModels.map(vehicleModel => ({...vehicleModel}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length
    newOrder.id = lastIndex + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}