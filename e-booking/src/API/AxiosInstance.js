// axiosInstance.js
import axios from 'axios'

//url outside of premisses
//http://206.81.29.111:80/api/v1

//url on premisses

//'http://192.168.122.1:8080/api/v1'
const instance = axios.create({
  baseURL: 'http://206.81.29.111:80/api/v1',
})

instance.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token')

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
