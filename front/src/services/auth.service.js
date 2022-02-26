import axios from "axios";
import jwt from 'jwt-decode'
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
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};