import { changeRequest, deleteRequest, getClowns, getRequests, sendCompletion } from "./dataAccess.js";

//old version that works before table
/*
const convertRequestsToList = (obj) => {
    const clowns = getClowns()
    const requests = getRequests()
    let html = ""
    if (obj.completed === false) {
    html += `<li class="openRequests">${obj.eventTitle}
    
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
        }
    if (obj.completed === true) {
        html += `<li class="closedRequests">${obj.eventTitle}
            <button class="request__delete" id="request--${obj.id}">Delete</button>
        </li>`
    }

    return html
}
*/


const convertRequestsToList = (obj) => {
    const clowns = getClowns()
    const requests = getRequests()
    let html = "<tr>"
    if (obj.completed) {
        html += `
        <td class="completions">${obj.eventTitle}</td>
        <td class="completions"></td>
        <td class="completions">
        <button class="request__delete" id="request--${obj.id}">
        Delete
        </button></td>
        </tr>
        `
    }
    else {
        html += `
        <td>${obj.eventTitle}
        </td>
        <td><select class="clowns" id="clowns">
            <option value="0">Choose</option>
                ${
                    clowns.map(
                        (clown) => {
                            return `<option value="${obj.id}--${clown.id}">${clown.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </td>
        <td>
            <button class="request__delete" id="request--${obj.id}">Delete</button>
        </td>
        `
    }
    
    return html
}


//original version that works. not a table

/*
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
*/


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})





//table version of html code

export const Requests = () => {
    const requests = getRequests()
    let html = ""
    html += `<table class="requestTable">
    <tr>
        <th>Description</th>
        <th>Completed</th>
        <th>Delete</th>
    </tr>`
    let listItems = requests.map(convertRequestsToList)
    html += listItems.join("")
    html += `</table>`
    return html
}



//old version
/*
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const completion = {
                "clownId": clownId,
                "requestId": requestId,
                "date": Date.now()
            }
            sendCompletion(completion)
        }
    }
)
*/


mainContainer.addEventListener(
    "change",
    event => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
            const requests = getRequests()
            const foundRequest = requests.find((request) => {
                return request.id === parseInt(requestId)
            })
            foundRequest.completed = true
            changeRequest(requestId, foundRequest)
        }
    }
)