import axios from 'axios';
import { ROLE_ACTIONS } from './RoleActionTypes';

//const baseUrl = 'http://206.81.29.111/api/v1/roles/all';
const baseUrl = 'http://localhost:5000/api/v1';
const baseUrlLive = 'http://206.81.29.111:80/api/v1/roles';

export const getRoles = function () {
  return async (dispatch) => {
    const res = await axios.get(`${baseUrlLive}/all`).catch((err) => {
      console.log('error getting roles', { errMessage: err.message });
      // dispatch({ type: ROLE_ACTIONS.GET_ROLES, payload: [] });
    });
    if (res.data) {
      dispatch({
        type: ROLE_ACTIONS.GET_ROLES,
        payload: res.data.roles,
      });
    }
  };
};
export const createRole = function (payload) {
  return async (dispatch) => {
    const res = await axios
      .post('http://localhost:5000/api/v1/roles/add', payload)
      .catch((err) => {
        console.log('error creating role', { errMessage: err.message });
        dispatch({ type: IS_AUTH.GET_USERS, payload: [] });
      });

    if (res.data) {
      dispatch({
        type: ROLE_ACTIONS.CREATE_ROLE,
        payload,
      });
    }
  };
};
