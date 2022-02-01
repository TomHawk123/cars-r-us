import { getVehicleModels, setModel } from "./database.js";

const models = getVehicleModels()

document.addEventListener(
    "change", 
    (changeEvent) => {
    if (changeEvent.target.id === "model") {
        setModel(parseInt(changeEvent.target.value))
    }
})

export const Models = () => {
    let html = "<select id='model'><option value='0'>Select your model...</option>"

    // This is how you have been converting objects to <li> elements
    for (const model of models) {
        html += `
            <option value="${model.id}" /> ${model.model}`
    }

    html += "</select>"
    return html
}