import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)


export const Technologies = () => {
    let html = "<select id='technology'><option value='0'>Select your paint color...</option>"

    
    for (const technology of technologies) {
        html += `
            <option value="${technology.id}" /> ${technology.package}`
    }

    html += "</select>"
    return html
}