import { Buttons } from "./buttons.js";
import { fetchClowns, fetchRequests, getRequests } from "./dataAccess.js";




const requests = getRequests()
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = Buttons()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
