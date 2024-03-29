import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import { server, user } from '../helpers/config'

const client = Axios.create({
    //all axios can be used, shown in axios documentation
    baseURL: `${server}`,
    responseType: 'json',
    headers: {
        Authorization: user,
        Accept: 'application/json',
    },
})

export default composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client)))
