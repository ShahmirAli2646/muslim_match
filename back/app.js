require("dotenv").config();
const User = require("./model/user");
const Profile = require("./model/profile")
const auth = require("./middleware/auth");
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const controller = require("./controllers/mainController")

const app = express();

app.use(express.json());
app.post("/register",controller.registerUser );
app.post("/login", controller.loginUser );
app.post("/welcome", auth, (req, res) => {
        res.status(200).send("Welcome 🙌 ");
      });
app.post("/submit-profile-data", controller.submitProfile );
app.get('/my-matches/full-matches/:userId/:page',controller.fullMatches);
app.get('/my-matches/partial-matches/:userId/:page',controller.partialMatches );
app.get('/my-matches/potential-matches/:userId/:page', controller.potentialMatches);


module.exports = app;