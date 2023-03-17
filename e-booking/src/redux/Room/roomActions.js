//jshint esversion:9

import { getData, postData, updateData } from 'src/API'
import { ROOM_ACTION_TYPES } from './roomActionTypes'

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
    const res = await postData(`/rooms`, payload).catch((err) => {
      console.log({ errMessage: err.message })
      dispatch({
        type: ROOM_ACTION_TYPES.ADD_ROOM,
        payload: null,
      })
    })
    if (res) {
      dispatch(addRoom(payload))
    }
  }
}
export const bookRoom = (payload) => {
  return async function (dispatch) {
    const res = await updateData(`/rooms/${payload.id}`, {
      isBooked: true,
    }).catch((err) => {
      console.log({ errMessage: err.message })
      dispatch({
        type: ROOM_ACTION_TYPES.BOOK_ROOM,
        payload: null,
      })
    })
    if (res) {
      console.log(res.data.status)
    }
  }
}
export const releaseRoom = (payload) => {
  return async function (dispatch) {
    const res = await updateData(`/rooms/${payload.id}`, {
      isBooked: false,
    }).catch((err) => {
      console.log({ errMessage: err.message })
      dispatch({
        type: ROOM_ACTION_TYPES.RELEASE_ROOM,
        payload: null,
      })
    })
    if (res) {
      console.log(res.data.status)
    }
  }
}
