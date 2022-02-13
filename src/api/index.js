import axios from 'axios'

export const publicRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
})
