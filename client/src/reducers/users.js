export default (users = [], action) => {
  switch(action.type) {
    case 'FETCH ALL':
      return action.payload;
    case 'CREATE':
      return [...users, action.payload];
    default:
      return users;
  }
}
