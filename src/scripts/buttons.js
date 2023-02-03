import { Requests } from "./requests.js"
import { ServiceForm } from "./serviceForm.js"

export const Buttons = () => {
    return `
    <h1>Clown Town</h1>
    <section class="serviceForm">
        <h2>Service Form</h2>
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Requests</h2>
        ${Requests()}
    </section>
    
    `
}