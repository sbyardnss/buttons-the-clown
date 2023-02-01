import { getClowns, getRequests } from "./dataAccess.js";

const convertRequestsToList = (obj) => {
    const clowns = getClowns()
    const requests = getRequests()
    let html = ""
    html += `<li>${obj.eventTitle}
    
            <select class="clowns" id="clowns">
                <option value="0">Choose</option>
                ${
                    clowns.map(
                        (clown) => {
                            return `<option value="${obj.id}--${clown.id}">${clown.name}</option>`
                        }
                    ).join("")
                }
            </select>
            
            <button class="request__delete"
                    id="request--${obj.id}">
                Delete
            </button>
        </li>`

    return html
}

export const Requests = () => {
    const requests = getRequests()
    const requstList = ""
    let html = `
        <ul>
            ${
                requests.map(convertRequestsToList).join("")
            }
        </ul>
    `
    return html
}