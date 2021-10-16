import * as api from '../api';
import { CREATE, FETCH_ALL } from '../constants/actionTypes';

export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createEvent = (user) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(user);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
