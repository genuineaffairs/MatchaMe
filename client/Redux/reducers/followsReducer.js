
export default (state = {starred: null, allOthers: null}, action) => {
  switch (action.type) {
    case 'USER_FOLLOWS_RECIEVED':
      return (state = action.payload);
    case 'FOLLOW_STARRED_SUCCESS':
      return (state = action.payload);
    case 'FOLLOW_UNSTARRED_SUCCESS':
      return (state = action.payload);
    default:
      return state;
  }
}