import axios from 'axios'
const baseUrl = 'http://api.weatherstack.com'

const api_key = process.env.REACT_APP_API_KEY

const getCurrent = (capital) => {
    const params = {
        access_key: api_key,
        query: capital
    }

    return axios.get(`${baseUrl}/current`, {params})
}

export default { getCurrent }