import * as api from '../api';
import { CREATE, FETCH_ALL } from '../constants/actionTypes';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: FETCH_ALL, payload: data });

  } catch (err) {
    console.log(err.message);
  }
}

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: CREATE, payload: data });

  } catch (err) {
    console.log(err.message)
  }
}