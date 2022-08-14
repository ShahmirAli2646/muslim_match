import {
    PROFILE_COMPLETE,
    PROFILE_INCOMPLETE
  } from "../actions/types";

  export const isComplete = (isComplete) => (dispatch) => {
    dispatch({
      type: PROFILE_COMPLETE,
      payload: {
        isComplete : isComplete
      },
    });
  };
 