import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/";

const getfullMatches = () => {
  return axios.get(API_URL + "my-matches/full-matches/:userId/:page", { headers: authHeader() });
};
const getpartialMatches = () => {
    return axios.get(API_URL + "my-matches/partial-matches/:userId/:page", { headers: authHeader() });
  };
  const getpotentialMatches = () => {
    return axios.get(API_URL + "my-matches/potential-matches/:userId/:page", { headers: authHeader() });
  };
const submitProfileData = () => {
    return axios
    .post(API_URL + "submit-profile-data", {
      email,
      password,
    })
    };
const getAdminPanel = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
export default {
    getfullMatches,
    getpartialMatches,
    getpotentialMatches,
    submitProfileData
};