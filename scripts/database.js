



const database = {
    paints: [
        {id: 1, color: "Silver"},
        {id: 2, color: "Midnight Blue"},
        {id: 3, color: "Firebrick Red"},
        {id: 1, color: "Spring Green"}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric"},
        {id: 2, material: "Charcoal Fabric"},
        {id: 3, material: "White Leather"},
        {id: 4, material: "Black Leather"}
    ],
    technologies: [
        {id: 1, package: "Basic Package (basic sound system"},
        {id: 2, package: "Navigation Package (includes integrated navigation system"},
        {id: 3, package: "Visibility Package (includes side and rear cameras"},
        {id: 4, package: "Ultra Package (includes navigation and visibility packages"}
    ],
    wheels: [
        {id: 1, option: "17-illnch Pair Radial"},
        {id: 2, option: "17-inch Pair Radial Black"},
        {id: 3, option: "18-inch Pair Spoke Silver"},
        {id: 4, optoin: "18-inch Pair Spoke Black"}
    ]
}

export const getPaint = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}