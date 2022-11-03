import currentUserReducer from "./currentUser";
import { usersReducer } from "./users";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  currentUserId: currentUserReducer,
  users: usersReducer,
});

export default allReducers;
