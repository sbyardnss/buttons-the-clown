import { getRequests, getClowns, sendRequest } from "./dataAccess.js";


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="nameOfChild">Who is the party for?</label>
            <input type="text" name="nameOfChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventName">What is your event?</label>
            <input type="text" name="eventName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfKids">How many kids will be present?</label>
            <input type="number" name="numOfKids" class="input" />
        </div>
        <div class="field">
            <label class="label" for="date">Event Date</label>
            <input type="date" name="date" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfParty">How long will the party be?</label>
            <input type="number" name="lengthOfParty" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "submitRequest") {
            const parName = document.querySelector("input[name='parentName']").value 
            const kidName = document.querySelector("input[name='nameOfChild']").value 
            const event = document.querySelector("input[name='eventName']").value 
            const eventAddress = document.querySelector("input[name='serviceAddress']").value
            const numOfKids = document.querySelector("input[name='numOfKids']").value 
            const eventDate = document.querySelector("input[name='date']").value 
            const eventLength = document.querySelector("input[name='lengthOfParty']").value 
            
            const dataToSendToAPI = {
                parentName: parName,
                childName: kidName,
                eventTitle: event,
                address: eventAddress,
                numberOfKids: numOfKids,
                date: eventDate,
                length: eventLength
            }

            sendRequest(dataToSendToAPI)
    }

})