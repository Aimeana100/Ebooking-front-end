import axios from 'axios'

function error(err) {
  return {
    errMessage: err.message,
  }
}
const url = {
  // url: 'http://161.35.229.154:8080/api/v1',
  url: 'http://127.0.0.1:4000/api/v1',
}
export const api = axios.create({
  baseURL: 'http://161.35.229.154:8080/api/v1',
  withCredentials: true,
  credentials: 'include',
})
export const postData = async (endpoint, data) => {
  const res = await axios.post(`${url.url}/${endpoint}`, data).catch((err) => {
    error(err)
  })
  return res.data.status
}

export const getData = async () => {
  const res = await axios.get('http://161.35.229.154:8080').catch((err) => {
    error(err)
  })
  return res.data
}

export const getDataEndPoint = async (endpoint) => {
  const res = await axios.get(`${url.url}/${endpoint}`).catch((err) => {
    error(err)
  })
  return res.data
}
export const updateData = async (endpoint, data) => {
  const res = await api.update(`/${endpoint}`, data).catch((err) => {
    error(err)
  })
  return res.data
}
