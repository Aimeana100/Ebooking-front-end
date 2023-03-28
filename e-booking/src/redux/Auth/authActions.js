import { api, getData } from 'src/API/'
import { IS_AUTH } from './AuthActionTypes'
import { errorFunction } from '../errorFunction'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const baseUrl = 'http://localhost:5000/api/v1/'
//const baseUrl = 'http://206.81.29.111/api/v1';
const baseUrlLive = 'http://206.81.29.111:80/api/v1'

export const auth = function (payload) {
  return {
    type: IS_AUTH.IS_AUTH,
    payload,
  }
}
export const login = function (payload) {
  return async function (dispatch) {
    const res1 = await axios
      .post(`${baseUrlLive}/login`, payload)
      .catch((err) => {
        toast.error(err.message)
        console.log({ err })
        dispatch({
          type: IS_AUTH.LOGIN,
          payload: {
            isAuth: false,
            user: null,
          },
        })
      })

    dispatch({
      type: IS_AUTH.LOGIN,
      payload: {
        isAuth: true,
        jwt: res1.data.accessToken,
        user: res1.data.user,
        role: res1.data.user.Role.name,
        access: res1.data.user.Role.access,
        permission: res1.data.user.Role.permission,
      },
    })
    toast.success('User Logged in')
    // dispatch({
    //   type: IS_AUTH.LOGIN,
    //   payload: {
    //     isAuth: true,
    //     jwt: res1.data.accessToken,
    //     user: res1.data.user,
    //     role: res1.data.user.Role.name,
    //   },
    // });
  }
}
export const registerUser = function (payload) {
  //payload.role = Number(payload.role);
  console.log(payload)
  return async function (dispatch) {
    const res = await axios
      .post(`${baseUrlLive}/users/add`, payload)
      .catch((err) => {
        errorFunction(dispatch, err)
      })
    if (res.data.user) {
      dispatch({
        type: IS_AUTH.REGISTER,
        payload: {
          isAuth: true,
          status: res.status,
        },
      })
      toast.success('User created')
      dispatch({
        type: notificationTypes.SUCCESS,
        payload: { text: 'User added successfuly', color: 'primary' },
      })
    }
  }
}

export const logout = function () {
  toast.success('User logged out')
  return {
    type: IS_AUTH.LOGOUT,
    isAuth: false,
  }
}
//206.81.29.111/api/v1/auth/login
export const getUsers = function () {
  return async function (dispatch) {
    const res = await axios
      .get('http://206.81.29.111/api/v1/users/all')
      .catch((err) => {
        console.log('error getting users', { errMessage: err.message })
        dispatch({ type: IS_AUTH.GET_USERS, payload: [] })
      })
    if (res.users) {
      dispatch({ type: IS_AUTH.GET_USERS, payload: res.data.users })
    }
  }
}
