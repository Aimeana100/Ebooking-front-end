import axios from 'axios'
import { USER_ACTIONS } from './userActionTypes'

const baseUrl = 'http://localhost:5000/api/v1/'
const baseUrlLive = 'http://206.81.29.111:80/api/v1/users/'
export const selectUser = (payload) => ({ type: USER_ACTIONS.SELECT, payload })
export const updateUser = (payloadApi, payloadLocal) =>
  async function (dispatch) {
    console.log(payloadApi.id)
    const res = await axios
      .put(`${baseUrlLive}update`, { ...payloadApi })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log('error getting users', { errMessage: err.message })
        // dispatch({ type: USER_ACTIONS.DELETE, payload: [] });
      })
    console.log(res)
    console.log('UPDATING USER', payloadApi)

    // dispatch({
    //   type: USER_ACTIONS.UPDATE,
    //   payload: { payloadApi: payloadApi, payloadLocal: payloadLocal },
    // });

    if (res.status === 200) {
      dispatch({
        type: USER_ACTIONS.UPDATE,
        payload: {
          payloadApi,
          payloadLocal,
        },
      })
    }
  }
export const deleteUser = (payloadApi, payloadLocal) => {
  console.log('nowowowo')
  console.log(payloadApi, payloadLocal)
  if (payloadLocal.length !== 0) {
    console.log(payloadLocal)
    payloadLocal = payloadLocal.filter((user) =>
      user._id === payloadApi.id ? '' : user,
    )
    console.log(payloadLocal.length)
  }
  return async function (dispatch) {
    //${baseUrlLive}delete/${payloadApi.id}
    const res = await axios
      .delete(`${baseUrlLive}delete/${payloadApi.id}`)
      .then((res) => {
        console.log(res)
        dispatch({
          type: USER_ACTIONS.DELETE,
          payload: {
            payloadApi,
            payloadLocal,
          },
        })
      })
      .catch((err) => {
        console.log('error getting users', { errMessage: err.message })

        // dispatch({ type: USER_ACTIONS.DELETE, payload: [] });
      })
    // if (res.status === 200) {
    // dispatch({
    //   type: USER_ACTIONS.DELETE,
    // payload: {
    //   payloadApi: payloadApi,
    //   payloadLocal: payloadLocal,
    // },
    // });
  }
}
export const getUsers = function () {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLive}all`).catch((err) => {
      console.log('error getting users', { errMessage: err.message })
      dispatch({ type: USER_ACTIONS.GET_USERS, payload: [] })
    })
    if (res.data.users) {
      dispatch({ type: USER_ACTIONS.GET_USERS, payload: res.data.users })
    }
  }
}
