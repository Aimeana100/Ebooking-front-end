import axios from 'axios';
import { PRODUCT_ACTIONS } from './userActionTypes';

const baseUrl = 'http://localhost:5000/api/v1/';
const baseUrlLive = 'http://206.81.29.111:80/api/v1/products/';
export const selectProduct = (payload) => {
  return { type: PRODUCT_ACTIONS.SELECT, payload };
};
export const createProduct = (payload) => {
  return async function (dispatch) {
    const res = await axios.post(`${baseUrlLive}add`, payload).catch((err) => {
      errorFunction(dispatch, err);
    });
    if (res.products) {
      dispatch({
        type: PRODUCT_ACTIONS.REGISTER,
        payload: {
          status: res.status,
        },
      });
    }
  };
};
export const updateProduct = (payloadApi, payloadLocal) => {
  return async function (dispatch) {
    console.log(payloadApi.id);
    const res = await axios
      .put(`${baseUrlLive}update`, { ...payloadApi })
      .catch((err) => {
        console.log('error getting users', { errMessage: err.message });
        // dispatch({ type: PRODUCT_ACTIONS.DELETE, payload: [] });
      });
    console.log('UPDATING USER', payloadApi);

    // dispatch({
    //   type: PRODUCT_ACTIONS.UPDATE,
    //   payload: { payloadApi: payloadApi, payloadLocal: payloadLocal },
    // });

    if (res.status === 200) {
      dispatch({
        type: PRODUCT_ACTIONS.UPDATE,
        payload: {
          payloadApi: payloadApi,
          payloadLocal: payloadLocal,
        },
      });
    }
  };
};
export const deleteProduct = (payloadApi, payloadLocal) => {
  console.log('nowowowo');
  console.log(payloadApi, payloadLocal);
  if (payloadLocal.length !== 0) {
    console.log(payloadLocal);
    payloadLocal = payloadLocal.filter((user) =>
      user._id === payloadApi.id ? '' : user
    );
    console.log(payloadLocal.length);
  }
  return async function (dispatch) {
    const res = await axios
      .delete(`${baseUrlLive}delete/${payloadApi.id}`)
      .catch((err) => {
        console.log('error getting users', { errMessage: err.message });

        // dispatch({ type: PRODUCT_ACTIONS.DELETE, payload: [] });
      });
    if (res.status === 200) {
      dispatch({
        type: PRODUCT_ACTIONS.DELETE,
        payload: {
          payloadApi: payloadApi,
          payloadLocal: payloadLocal,
        },
      });
    }
    // if (res.status === 200) {
    // dispatch({
    //   type: PRODUCT_ACTIONS.DELETE,
    // payload: {
    //   payloadApi: payloadApi,
    //   payloadLocal: payloadLocal,
    // },
    // });
  };
};
export const getProducts = function () {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrlLive}all`).catch((err) => {
      console.log('error getting users', { errMessage: err.message });
      dispatch({ type: PRODUCT_ACTIONS.GET_USERS, payload: [] });
    });
    if (res.data.users) {
      dispatch({ type: PRODUCT_ACTIONS.GET_USERS, payload: res.data.users });
    }
  };
};
