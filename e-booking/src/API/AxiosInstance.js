// axiosInstance.js
import axios from 'axios'

//url outside of premisses
//http://206.81.29.111:80/api/v1

//url on premisses

//'http://192.168.122.1:8080/api/v1'
const instance = axios.create({
  baseURL: 'http://206.81.29.111:80/api/v1',
})

const cookies = document.cookie.split(';').reduce((acc, cookie) => {
  const [name, value] = cookie.trim().split('=')
  acc[name] = value
  return acc
}, {})

instance.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token')

instance.interceptors.request.use(
  (config) => {
    console.log('Request:', config)
    console.log('Cookies', cookies)
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  },
)

export default instance
