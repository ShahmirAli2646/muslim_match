import axios from "axios";
import jwt from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "http://localhost:4001/";

const register = (first_name,last_name ,  email, password) => {
  return axios.post(API_URL + "register", {
    first_name,
    last_name,
    email,
    password,
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      toast('Register Successful')
    }
    return response.data;
});
};
const login = (email, password) => {
    console.log('ncoiewcoe')
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {  
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log('im coming here')
        toast("Login Successfull")
      }
      
      return response.data;
    }).catch((err)=>{
      toast("invalid credentials")
    });
};
const logout = () => {
  localStorage.removeItem("user");
  toast("logout successful")
};
export default {
  register,
  login,
  logout,
};