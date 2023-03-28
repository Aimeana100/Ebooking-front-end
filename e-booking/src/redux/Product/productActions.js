import axios from 'axios'
import { toast } from 'react-hot-toast'
import { PRODUCT_ACTIONS } from './productActionTypes'

const baseUrl = 'http://localhost:5000/api/v1/'
const baseUrlLive = 'http://206.81.29.111:80/api/v1/products/'
export const selectProduct = (payload) => {
  return { type: PRODUCT_ACTIONS.SELECT, payload }
}
export const updateProduct = (payloadApi, payloadLocal) => {
  return async function (dispatch) {
    console.log(payloadApi.id)
    const res = await axios
      .put(`${baseUrlLive}update`, { ...payloadApi })
      .catch((err) => {
        console.log('error updating product', { errMessage: err.message })
        // dispatch({ type: USER_ACTIONS.DELETE, payload: [] });
      })
    console.log('UPDATING USER', payloadApi)

    // dispatch({
    //   type: USER_ACTIONS.UPDATE,
    //   payload: { payloadApi: payloadApi, payloadLocal: payloadLocal },
    // });

    if (res.status === 200) {
      dispatch({
        type: PRODUCT_ACTIONS.UPDATE,
        payload: {
          payloadApi: payloadApi,
          payloadLocal: payloadLocal,
        },
      })
    }
  }
}
export const deleteProduct = (payloadApi, payloadLocal) => {
  console.log('nowowowo')
  console.log(payloadApi, payloadLocal)
  if (payloadLocal.length !== 0) {
    console.log(payloadLocal)
    payloadLocal = payloadLocal.filter((user) =>
      product._id === payloadApi.id ? '' : product,
    )
    console.log(payloadLocal.length)
  }
  return async function (dispatch) {
    const res = await axios
      .delete(`${baseUrlLive}delete/${payloadApi.id}`)
      .catch((err) => {
        console.log('error getting products', { errMessage: err.message })

        // dispatch({ type: USER_ACTIONS.DELETE, payload: [] });
      })
    if (res.status === 200) {
      dispatch({
        type: PRODUCT_ACTIONS.DELETE,
        payload: {
          payloadApi: payloadApi,
          payloadLocal: payloadLocal,
        },
      })
    }
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
export const getProducts = function () {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLive}all`).catch((err) => {
      console.log('error getting products', { errMessage: err.message })
      dispatch({ type: PRODUCT_ACTIONS.GET_ALL, payload: [] })
    })

    if (res.data.data) {
      dispatch({ type: PRODUCT_ACTIONS.GET_ALL, payload: res.data.data })
    }
  }
}

export const createProduct = (payload, products) => {
  return async function (dispatch) {
    const res = await axios
      .post(`http://206.81.29.111:80/api/v1/products/add`, { ...payload })
      .then(() => {
        toast.success('Product created')
      })
      .catch((err) => {
        console.log('error updating product', { errMessage: err.message })
        toast.success('Product creation failed')

        // dispatch({ type: USER_ACTIONS.DELETE, payload: [] });
      })
    console.log(res)
    if (res.data.status === 'ok') {
      dispatch({
        type: PRODUCT_ACTIONS.ADD_PRODUCT,
        payload: [...products, res.data.data],
      })
    }
  }
}
