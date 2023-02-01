import { Buttons } from "./buttons.js";
import { fetchRequests, getRequests } from "./dataAccess.js";




const requests = getRequests()
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
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
