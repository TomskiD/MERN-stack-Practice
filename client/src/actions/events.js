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

export const createEvent = (event) => async (dispatch) => {
  const response = await api.createEvent(event);
  const duplicateKeyError = 11000;
  if (response?.data?.error?.code === duplicateKeyError) {
    alert('The given e-mail address already exists in the database.');
    return;
  }
  dispatch({ type: CREATE, payload: response });
  alert('The event has been successfully registered in the database.');
};
