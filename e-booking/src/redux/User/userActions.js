import { toast } from 'react-hot-toast'
import instance from 'src/API/AxiosInstance'
import { USER_ACTIONS } from './userActionTypes'

export const selectUser = (payload) => ({ type: USER_ACTIONS.SELECT, payload })
export const updateUser = (payloadApi, payloadLocal) =>
  async function (dispatch) {
    console.log(payloadApi.id)
    const res = await instance
      .put(`/users/update`, { ...payloadApi })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        toast.error(err.message)
      })
    console.log(res)
    console.log('UPDATING USER', payloadApi)

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
    const res = await instance
      .delete(`/users/delete/${payloadApi.id}`)
      .then((res) => {
        toast.success('user deleted')
        dispatch({
          type: USER_ACTIONS.DELETE,
          payload: {
            payloadApi,
            payloadLocal,
          },
        })
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
}
export const getUsers = function () {
  return async function (dispatch) {
    const res = await instance
      .get(`/users/all`)
      .then((res) => {
        dispatch({ type: USER_ACTIONS.GET_USERS, payload: res.data.users })
      })
      .catch((err) => {
        toast.error(err.message)
        dispatch({ type: USER_ACTIONS.GET_USERS, payload: [] })
      })
  }
}
