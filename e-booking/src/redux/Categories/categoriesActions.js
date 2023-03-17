import axios from 'axios'
import { CATEGORY_ACTIONS } from './categoriesActionTypes'

const baseUrl = 'http://localhost:5000/api/v1/'
const baseUrlLiveProduct = 'http://206.81.29.111:80/api/v1/products/category/'
const baseUrlLiveService = 'http://206.81.29.111:80/api/v1/products/category/'

export const createProductCategory = function (payload) {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLiveProduct}add`).catch((err) => {
      console.log('error creating product category', {
        errMessage: err.message,
      })
      dispatch({ type: CATEGORY_ACTIONS.GET_PRODUCT_CATEGORIES, payload: [] })
    })

    if (res.data.data) {
      dispatch({
        type: CATEGORY_ACTIONS.GET_PRODUCT_CATEGORIES,
        payload: res.data.data,
      })
    }
  }
}

export const createServiceCategory = function (payload) {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLiveService}add`).catch((err) => {
      console.log('error create service category', { errMessage: err.message })
      dispatch({ type: CATEGORY_ACTIONS.GET_PRODUCT_CATEGORIES, payload: [] })
    })

    if (res.data.data) {
      dispatch({
        type: CATEGORY_ACTIONS.GET_PRODUCT_CATEGORIES,
        payload: res.data.data,
      })
    }
  }
}

export const getProductCategories = function () {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLiveProduct}all`).catch((err) => {
      console.log('error getting product categories', {
        errMessage: err.message,
      })
      dispatch({ type: CATEGORY_ACTIONS.GET_PRODUCT_CATEGORIES, payload: [] })
    })

    if (res.data.data) {
      dispatch({
        type: CATEGORY_ACTIONS.GET_PRODUCT_CATEGORIES,
        payload: res.data.data,
      })
    }
  }
}
export const getServiceCategories = function () {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLiveService}all`).catch((err) => {
      console.log('error getting service categories', {
        errMessage: err.message,
      })
      dispatch({ type: CATEGORY_ACTIONS.GET_SERVICE_CATEGORIES, payload: [] })
    })

    if (res.data.data) {
      dispatch({
        type: CATEGORY_ACTIONS.GET_SERVICE_CATEGORIES,
        payload: res.data.data,
      })
    }
  }
}
