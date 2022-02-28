import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import forms from './forms';
export default combineReducers({
  auth,
  message,
  forms,
});