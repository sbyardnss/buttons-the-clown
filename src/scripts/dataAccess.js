const applicationState = {
    clowns: [],
    requests: [],
    completions: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                applicationState.requests = serviceRequests
            }
        )
}
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clownList) => {
                applicationState.clowns = clownList
            }
        )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}