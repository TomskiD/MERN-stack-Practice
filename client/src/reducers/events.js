import { CREATE, FETCH_ALL } from '../constants/actionTypes';

export default (events = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...events, action.payload];
    default:
      return events;
  }
};
