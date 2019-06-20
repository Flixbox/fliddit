import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

const server = 'localhost:3001'

const client = axios.create({
    //all axios can be used, shown in axios documentation
    baseURL: `${server}`,
    responseType: 'json',
    headers: { Authorization: 'A Fliddit user', Accept: 'application/json' },
})

export default composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client)))
