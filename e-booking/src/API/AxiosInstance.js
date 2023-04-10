// axiosInstance.js
import axios from 'axios'

//url outside of premisses
//http://206.81.29.111:8080/api/v1

//url on premisses

//'http://192.168.122.1:8080/api/v1'
const instance = axios.create({
  baseURL: 'http://206.81.29.111:8080/api/v1',
})

instance.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token')

instance.interceptors.request.use(
  async (config) => {
    //const accessToken= await axios.get('/')
    console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
instance.interceptors.response.use(
  (response) => {
    return response
  },
  // (error) => {
  //   if (error.response.status === 401 || error.response.status === 403) {
  //     // Clear the token and state fields from local storage
  //     localStorage.removeItem('token')
  //     localStorage.removeItem('state')
  //   }
  //   return Promise.reject(error)
  // },
)

export default instance
