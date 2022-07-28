import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:4001/";

const getMemberCards = () => {
  return axios.get(API_URL + "adminDashboard/MemberCards")
};
const getUser = (user) => {
  return axios.get(API_URL + "adminDashboard/Users/"+user);
};
const getpartialMatches = (userId , page) => {
    return axios.get(API_URL + "my-matches/partial-matches/"+userId + "/"+page);
  };
  const getuserProfile = (userId) => {
    return axios.get(API_URL + "myprofile/"+userId);
  };
  const getuser = (userId) => {
    return axios.get(API_URL + "user/"+userId);
  };
  const getpotentialMatches = (userId , page) => {
    return axios.get(API_URL + "my-matches/potential-matches/"+userId + "/"+page);
  };
const submitProfileData = (formdata) => {
    return axios
    .post(API_URL + "submit-profile-data", 
      formdata
    )
    };

const getTotalMembers = () => {
  return axios.get(API_URL + "adminDashboard/TotalMembers")
}    
const getAdminPanel = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
}
const getTotalMatches = () => {
  return axios.get(API_URL + "adminDashboard/TotalMatches")
}
const getTotalLikes = () => {
  return axios.get(API_URL + "adminDashboard/TotalLikes")
}
const getTotalViews = () => {
  return axios.get(API_URL + "adminDashboard/TotalViews")
}      
const getActivityPanelResponse = () => {
  return axios.get(API_URL + "adminDashboard/ActivityPanel")
}      

export default {
    getMemberCards,
    getpartialMatches,
    getpotentialMatches,
    submitProfileData,
    getuserProfile,
    getUser,
    getTotalMembers,
    getTotalMatches,
    getTotalLikes,
    getTotalViews,
    getActivityPanelResponse
};