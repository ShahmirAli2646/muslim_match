import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:4001/";

const getfullMatches = () => {
  return axios.get(API_URL + "my-matches/full-matches/:userId/:page", { headers: authHeader() });
};
const getpartialMatches = () => {
    return axios.get(API_URL + "my-matches/partial-matches/:userId/:page", { headers: authHeader() });
  };
  const getuserProfile = (userId) => {
    return axios.get(API_URL + "myprofile/"+userId);
  };
  const getpotentialMatches = () => {
    return axios.get(API_URL + "my-matches/potential-matches/:userId/:page", { headers: authHeader() });
  };
const submitProfileData = (formdata) => {
    return axios
    .post(API_URL + "submit-profile-data", 
      formdata
    )
    };
const getAdminPanel = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
export default {
    getfullMatches,
    getpartialMatches,
    getpotentialMatches,
    submitProfileData,
    getuserProfile
};