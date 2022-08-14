import {
    PROFILE_COMPLETE,
    PROFILE_INCOMPLETE
  } from "../actions/types";
  const user = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    isComplete : false
  }
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case PROFILE_COMPLETE:
        return {
          ...state,
          isComplete: payload.isComplete,
        };
      default:
        return state;
    }
  }