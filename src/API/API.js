import * as axios from "axios";
import config from '../config.js'
const client = axios.create({
    baseURL: config.api.baseUrl,
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }),
})

export const userAPI = {
    getUser: (login)=>{
        return client.get(`/users/${login}`)
    },
}