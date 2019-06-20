import axios from 'axios'

const server = 'localhost:3001'

export const getInitialData = () => {
    return Promise.all([getCategories()]).then(([categories]) => ({
        categories,
    }))
}

const getCategories = () => {
    return axios.get(`${server}/categories`)
}
