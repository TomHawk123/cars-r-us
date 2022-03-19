// importing two functions from the database module to use in this module
import { getTechnologies, setTechnology } from "./database.js";
// declaring an immutable varable and setting it equal to a function that iterates
// the database.technologies array with the map method invoked. 
const technologies = getTechnologies()
// using the world object doccument with an eventlistener method invoked
document.addEventListener(
    // telling the function to look for a change event. What is the string of "change" for?
    "change",
    (changeEvent) => {
        // looking for the condition of the id of the changeEvent to be strictly equal to 
        // a string of "technology"
        if (changeEvent.target.id === "technology") {
            // when the aforementioned condition is true, invoke the setTechnology function
            // (previously imported from database.js), with the argument that is the value 
            // of the changeEvent target.
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

// exporting a function that makes an HTML string
export const Technologies = () => {
    // declaring a mutable html variable equal to a string containing HTML code
    let html = "<select id='technology'><option value='0'>Select your paint color...</option>"

    // using a for...of loop to iterate the technologies array
    for (const technology of technologies) {
        // for each object (technology) in the technologies array, concatenate the string of html
        // with a template literal that interpolates the id property and the package property
        // on the technology object
        html += `
            <option value="${technology.id}" /> ${technology.package}`
    }
    // concatenate onto the mutable html variable a string of html that closes the select element.
    html += "</select>"
    // return the concatenated and interpolated string containing the html code.
    return html
}