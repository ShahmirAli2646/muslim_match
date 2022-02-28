import {
START_FORM,
APPEARANCE_FORM,
BASICS_FORM,
DEEN_FORM,
FINISH_FORM,
PROFESSION_FORM,
FAMILY_RELATIONS_FORM,
FRIENDSHIPS_FORM,
LIFESTYLE_FORM,
  } from "./types";
 
  export const SubmitStartForm = (first_name,last_name, email, password) => (dispatch) => {
        dispatch({
          type: START_FORM,
          payload: { user: response.data },
        });
      };
      