import axios from 'axios';
import { USER_ACTIONS } from './userActionTypes';

const baseUrl = 'http://localhost:5000/api/v1/';
export const selectUser = (payload) => {
  return { type: USER_ACTIONS.SELECT, payload };
};
export const updateUser = (payloadApi, payloadLocal) => {
  return async function (dispatch) {
    // const res = await axios.patch(
    //   'http://localhost:5000/api/v1/users',
    //   payload._id
    // );
    console.log('UPDATING USER', payloadLocal);
    dispatch({
      type: USER_ACTIONS.UPDATE,
      payload: { payloadApi: payloadApi, payloadLocal: payloadLocal },
    });
  };
};
export const deleteUser = (payloadApi, payloadLocal) => {
  console.log(payloadApi, payloadLocal);
  if (payloadLocal.length !== 0) {
    console.log(payloadLocal);
    payloadLocal = payloadLocal.filter((user) =>
      user._id === payloadApi._id ? '' : user
    );
    console.log(payloadLocal.length);
  }
  return async function (dispatch) {
    const res = await axios
      .delete('http://localhost:5000/api/v1/users', payloadApi._id)
      .catch((err) => {
        console.log('error getting users', { errMessage: err.message });
        // dispatch({ type: USER_ACTIONS.DELETE, payload: [] });
      });
    // if (res.status === 200) {
    //   dispatch({
    //     type: USER_ACTIONS.DELETE,
    //     payload,
    //   });
    // }
    // if (res.status === 200) {
    dispatch({
      type: USER_ACTIONS.DELETE,
      payload: {
        payloadApi: payloadApi,
        payloadLocal: payloadLocal,
      },
    });
  };
};
export const getUsers = function () {
  return async function (dispatch) {
    const res = await axios.get(`${baseUrl}users/`).catch((err) => {
      console.log('error getting users', { errMessage: err.message });
      dispatch({ type: USER_ACTIONS.GET_USERS, payload: [] });
    });
    if (res.data.users) {
      dispatch({ type: USER_ACTIONS.GET_USERS, payload: res.data.users });
    }
  };
};
