require("dotenv").config();
const User = require("./model/user");
const Profile = require("./model/profile")
const auth = require("./middleware/auth");
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require('cors')
const controller = require("./controllers/mainController")
const ProfileSubmit = require('./controllers/ProfileSubmitController')
const FetchUserProfile= require('./controllers/FetchProfileController')

const app = express();

app.use(express.json());
app.use(cors())
app.post("/register", controller.registerUser );
app.post("/login", controller.loginUser );
app.get('/myprofile/:userId' , FetchUserProfile.FetchUserProfile)
app.post("/submit-profile-data",ProfileSubmit.submitProfile );
app.get('/my-matches/full-matches/:userId/:page',auth,controller.fullMatches);
app.get('/my-matches/partial-matches/:userId/:page',auth,controller.partialMatches );
app.get('/my-matches/potential-matches/:userId/:page',auth, controller.potentialMatches);


module.exports = app;