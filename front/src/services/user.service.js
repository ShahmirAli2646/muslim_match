import axios from "axios";
import authHeader from "./auth-header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = "http://localhost:4001/";


const getfullMatches = (userId , page) => {
  return axios.get(API_URL + "my-matches/full-matches/"+userId + "/"+page);
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
    toast('data submitted successfully')
    return axios
    .post(API_URL + "submit-profile-data", 
      formdata
    )
    };

 const viewUserProfile = (formdata) => {
    toast('Welcome to profile')
    return axios.post(API_URL + "view-user-profile",
    formdata
    )
    
 }   
 const likeUserProfile = (formdata) => {
  toast('profile liked')
  return axios.post(API_URL + "like-user-profile",
  formdata
  )
}   
const getAdminPanel = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
export default {
    getfullMatches,
    getpartialMatches,
    getpotentialMatches,
    submitProfileData,
    getuserProfile,
    getuser,
    viewUserProfile,
    likeUserProfile
};