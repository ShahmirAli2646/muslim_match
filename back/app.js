require("dotenv").config();
const User = require("./model/user");
const Profile = require("./model/profile")
const auth = require("./middleware/auth");
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express();

app.use(express.json());
// Register
app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
    
    // Login
    app.post("/login", async (req, res) => {

        // Our login logic starts here
        try {
          // Get user input
          const { email, password } = req.body;
      
          // Validate user input
          if (!(email && password)) {
            res.status(400).send("All input is required");
          }
          // Validate if user exist in our database
          const user = await User.findOne({ email });
      
          if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
              { user_id: user._id, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );
      
            // save user token
            user.token = token;
      
            // user
            res.status(200).json(user);
          }
          res.status(400).send("Invalid Credentials");
        } catch (err) {
          console.log(err);
        }
        // Our register logic ends here
      });
      
      app.post("/welcome", auth, (req, res) => {
        res.status(200).send("Welcome 🙌 ");
      });

      app.post("/submit-profile-data",  async (req, res) => {
        try {
            const {  purpose, 
                gender,
                dateofbirth,
                prayers,
                islamicInterest, user_id  } = req.body;
                const profile = await Profile.create({
                purpose, 
                gender,
                dateofbirth,
                prayers,
                islamicInterest,
                user:user_id
                  });
                  res.status(201).json(profile);
        }catch(err){
            console.log(err);
        }
       
      });
      app.get('/my-matches/full-matches/:userId/:page', async (req, res) => {
        const userId = req.params.userId;
        var perPage = 5
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({user:userId})
       //now return profiles that match this profile fully
     const FullMatches=await Profile.find({
        purpose:profiletomatch.purpose, 
        gender:profiletomatch.gender,
        dateofbirth:profiletomatch.dateofbirth,
        prayers:profiletomatch.prayers,
        islamicInterest:profiletomatch.islamicInterest
     })
            .limit(perPage)
            .skip(perPage * (page-1))   
        res.status(201).json(FullMatches);
      });
      app.get('/my-matches/partial-matches/:userId/:page', async (req, res) => {
        const userId = req.params.userId;
        var perPage = 5
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({user:userId})
       //now return profiles that match this profile fully
     const FullMatches=await Profile.find({
        purpose:profiletomatch.purpose, 
        gender:profiletomatch.gender,
        dateofbirth:profiletomatch.dateofbirth,
        prayers:profiletomatch.prayers,
        islamicInterest:profiletomatch.islamicInterest
     })
            .limit(perPage)
            .skip(perPage * (page-1))   
        res.status(201).json(FullMatches);
      });
      app.get('/my-matches/potential-matches/:userId/:page', async (req, res) => {
        const userId = req.params.userId;
        var perPage = 5
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({user:userId})
       //now return profiles that match this profile fully
     const FullMatches=await Profile.find({
        purpose:profiletomatch.purpose, 
        gender:profiletomatch.gender,
        dateofbirth:profiletomatch.dateofbirth,
        prayers:profiletomatch.prayers,
        islamicInterest:profiletomatch.islamicInterest
     })
            .limit(perPage)
            .skip(perPage * (page-1))   
        res.status(201).json(FullMatches);
      });

// Logic goes here

module.exports = app;