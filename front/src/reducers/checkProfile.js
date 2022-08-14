import {
    PROFILE_COMPLETE,
    PROFILE_INCOMPLETE
  } from "../actions/types";
  const isComplete = localStorage.getItem("isComplete")
  let check = ''
  if(isComplete!==undefined){
     if(isComplete === 'false'){
         check = false;
     }
     else{
        check=true
     }
  }
  const initialState = isComplete ? 
  {isComplete : check} :
  {isComplete : false}
  
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