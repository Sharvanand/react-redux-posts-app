import { combineReducers } from "redux";
import postReducer from "./postReducer";

const initState = {
  posts: []
};

export default combineReducers({
  posts: postReducer
});
