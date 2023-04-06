//jshint esversion:9

import { getData, postData, updateData } from 'src/API'
import instance from 'src/API/AxiosInstance'
import { ROOM_ACTION_TYPES } from './roomActionTypes'
import { toast } from 'react-hot-toast'

export const selectRoom = (payload) => {
  return { type: ROOM_ACTION_TYPES.SELECT_ROOM, payload }
}

export const getRooms = () => {
  return async function (dispatch) {
    let res = await getData('/rooms').catch((err) => {
      console.log({
        errorMessage: err.message,
        customMessage: 'error fetching rooms',
      })
      dispatch({
        type: ROOM_ACTION_TYPES.GET_ROOMS,
        payload: {},
      })
    })
    if (res) {
      dispatch({
        type: ROOM_ACTION_TYPES.GET_ROOMS,
        payload: res.data.data,
      })
    }
  }
}
export const addRoom = (payload) => {
  return async function (dispatch) {
    await instance
      .get(`/rooms`, payload)
      .then((res) => {
        if (res) {
          dispatch(addRoom(payload))
        }
      })
      .catch((err) => {
        toast.error(err.message)
        dispatch({
          type: ROOM_ACTION_TYPES.ADD_ROOM,
          payload: null,
        })
      })
  }
}
export const bookRoom = (payload) => {
  return async function (dispatch) {
    await instance
      .put(`/rooms/${payload.id}`, {
        isBooked: true,
      })
      .then((res) => {
        if (res) {
          console.log(res.data.status)
        }
      })
      .catch((err) => {
        toast.error(err.message)
        dispatch({
          type: ROOM_ACTION_TYPES.BOOK_ROOM,
          payload: null,
        })
      })
  }
}
export const releaseRoom = (payload) => {
  return async function (dispatch) {
    await instance
      .put(`/rooms/${payload.id}`, {
        isBooked: false,
      })
      .then((res) => {
        if (res) {
          console.log(res.data.status)
        }
      })
      .catch((err) => {
        toast.error(err.message)
        dispatch({
          type: ROOM_ACTION_TYPES.RELEASE_ROOM,
          payload: null,
        })
      })
  }
}
