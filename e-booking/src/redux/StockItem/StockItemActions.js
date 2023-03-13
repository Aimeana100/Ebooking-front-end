//jshint esversion:9

import { getData, postData, updateData, getDataEndPoint } from 'src/API'
import { STOCK_ITEM_ACTIONS_TYPES } from './StockItemActionTypes'

export const getStockItems = () => {
  return async function (dispatch) {
    let res = await getDataEndPoint('stock/item/all').catch((err) => {
      console.log({ errorMessage: err.message, customMessage: 'error fetching stock items' })
      dispatch({
        type: STOCK_ITEM_ACTIONS_TYPES.GET_ITEMS,
        payload: [],
      })
      // console.log(res)
    })
    if (res) {
      console.log(res)
      dispatch({
        type: STOCK_ITEM_ACTIONS_TYPES.GET_ITEMS,
        payload: res.data,
      })
    }
  }
}
export const addStockItem = (payload) => {
  return async function (dispatch) {
    const res = await postData(`stock/item/add`, payload).catch((err) => {
      console.log({ errMessage: err.message })
      dispatch({
        type: STOCK_ITEM_ACTIONS_TYPES.CREATE_ITEMS,
        payload,
      })
    })
    if (res) {
      dispatch(addStockItem(payload))
    }
  }
}
export const bookRoom = (payload) => {
  return async function (dispatch) {
    const res = await updateData(`/rooms/${payload.id}`, { isBooked: true }).catch((err) => {
      console.log({ errMessage: err.message })
      dispatch({
        type: STOCK_ITEM_ACTIONS_TYPES.BOOK_ROOM,
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
    const res = await updateData(`/rooms/${payload.id}`, { isBooked: false }).catch((err) => {
      console.log({ errMessage: err.message })
      dispatch({
        type: STOCK_ITEM_ACTIONS_TYPES.RELEASE_ROOM,
        payload: null,
      })
    })
    if (res) {
      console.log(res.data.status)
    }
  }
}
