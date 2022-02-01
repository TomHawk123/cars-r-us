import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)


export const Wheels = () => {
    let html = "<select id='wheel'><option value='0'>Select your wheel...</option>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `
            <option value="${wheel.id}" /> ${wheel.style}`
    }

    html += "</select>"
    return html
}