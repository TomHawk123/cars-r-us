import { getPaintColors, setPaintColor } from "./database.js";

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paintColor") {
            setPaintColor(parseInt(changeEvent.target.value))
        }
    }
)


export const PaintColors = () => {
    let html = "<select id='paintColor'><option value='0'>Select your paint color...</option>"

    
    for (const paintColor of paintColors) {
        html += `
            <option value="${paintColor.id}" /> ${paintColor.color}`
    }

    html += "</select>"
    return html
}