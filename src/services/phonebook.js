import axios from 'axios'
const baseUrl = '/api/persons'

const createService = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const removeService = id => {
    const request = axios.delete(baseUrl.concat(`/${id}`))
    return request.then(response => response.data)
}

const updateService = (newPerson, id) => {
    const request = axios.put(baseUrl.concat(`/${id}`), newPerson)
    return request.then(response => response.data)
}

const getService = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {createService, removeService, updateService, getService}