import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
            
        }
    }
)

export const Interiors = () => {
    let html = "<select id='interior'><option value='0'>Select your interior...</option>"

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {
        html += `
            <option value="${interior.id}" /> ${interior.material}`
    }

    html += "</select>"
    return html
}