import { api, getData } from 'src/API/';
import { IS_AUTH } from './AuthActionTypes';
import { errorFunction } from '../errorFunction';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:5000/api/v1/';
//const baseUrl = 'http://206.81.29.111/api/v1';
export const auth = function (payload) {
  return {
    type: IS_AUTH.IS_AUTH,
    payload,
  };
};
export const login = function (payload) {
  return async function (dispatch) {
    const res1 = await axios.post(`${baseUrl}users/login`, payload);

    dispatch({
      type: IS_AUTH.LOGIN,
      payload: {
        isAuth: true,
        jwt: res1.data.accessToken,
        user: res1.data.user,
        role: res1.data.user.role,
      },
    });

    // dispatch({
    //   type: IS_AUTH.LOGIN,
    //   payload: {
    //     isAuth: true,
    //     jwt: res1.data.accessToken,
    //     user: res1.data.user,
    //     role: res1.data.user.Role.name,
    //   },
    // });
  };
};
export const registerUser = function (payload) {
  //payload.role = Number(payload.role);
  console.log(payload);
  return async function (dispatch) {
    const res = await axios
      .post(`${baseUrl}users/register`, payload)
      .catch((err) => {
        errorFunction(dispatch, err);
      });
    if (res.user) {
      dispatch({
        type: IS_AUTH.REGISTER,
        payload: {
          status: res.status,
        },
      });
    }
  };
};

export const logout = function () {
  return async function (dispatch) {
    const res = await axios
      .get('http:://localhost:5000/api/v1/user/logout')
      .catch((err) => {
        console.log('error logging out', { errMessage: err.message });
        dispatch({
          type: IS_AUTH.LOGOUT,
          isAuth: false,
        });
      });
    if (res) {
      console.log(res.data.status);
    }
  };
};
//206.81.29.111/api/v1/auth/login
export const getUsers = function () {
  return async function (dispatch) {
    const res = await axios
      .get('http://206.81.29.111/api/v1/users/all')
      .catch((err) => {
        console.log('error getting users', { errMessage: err.message });
        dispatch({ type: IS_AUTH.GET_USERS, payload: [] });
      });
    if (res.users) {
      dispatch({ type: IS_AUTH.GET_USERS, payload: res.data.users });
    }
  };
};
