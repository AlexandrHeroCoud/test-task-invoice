import axios from "axios";
import config from '../config.js'
const client = axios.create({
    baseURL: config.api.baseUrl,
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }),
})

export const userAPI = {
    /**
     * @function getUser()
     * @param {String} login
     * @description request on githubAPI
     * **/
    getUser: (login)=>{
        return axios(`https://api.github.com/users/${login}`)
    },
}

export const terminalsAPI = {
    getRows: ()=>{
        return client.get("/terminals")
    },

    /**
     * @function deleteRow()
     * @param {Number} id
     * **/
    deleteRow: (id)=>{
        return client.delete(`/terminals/${id}`)
    },
    /**
     * @function addRow()
     * @param {Object} data
     * **/
    addRow: (data)=>{
        return client.post(`/terminals`,data)
    }
}