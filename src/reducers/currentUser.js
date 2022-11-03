const currentUserReducer = (state = -1, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.data;
    default:
      return state;
  }
};

export default currentUserReducer;
