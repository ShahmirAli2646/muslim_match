import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import forms from './forms';
import checkProfile from "./checkProfile";
export default combineReducers({
  auth,
  message,
  forms,
  checkProfile
});