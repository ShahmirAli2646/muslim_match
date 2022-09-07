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
const FullMatches = require('./controllers/FullMatchesController');
const { PartialMatches } = require("./controllers/PartialMatchesController");
const PotentialMatches = require("./controllers/PotentialMatchesController")
const {totalMembers , chartResponse , memberCards , getUser , getTotalMatches , getTotalLikes , getTotalViews , activityPanelResponse} = require("./controllers/adminKPI")
const {viewProfile} = require("./controllers/viewProfileController")
const {likeProfile} = require("./controllers/likeProfileController")
const {Likes} = require('./controllers/likesController')
const {submitImportants , FetchUserImportants} = require('./controllers/importantsController')

const app = express();

app.use(express.json());
app.use(cors())
app.post("/register", controller.registerUser );
app.post("/login", controller.loginUser );
app.get('/myprofile/:userId' , FetchUserProfile.FetchUserProfile)
app.get('/user/:userId' , async (req, res) => {
    try{
        const userId = req.params.userId;
        const user = await User.findOne({_id:userId},);
        res.status(201).json(user);
    }
    catch(err){
      console.log(err)
    }

},)
app.post("/submit-profile-data",ProfileSubmit.submitProfile );
app.post("/submit-important-data",submitImportants );
app.post("/view-user-profile" , viewProfile)
app.post("/like-user-profile" , likeProfile)
app.get('/my-matches/full-matches/:userId/:page/:important',FullMatches.FullMatches);
app.get('/my-matches/partial-matches/:userId/:page/:important',PartialMatches );
app.get('/my-likes/likes/:userId/:page', Likes );
app.get('/my-matches/potential-matches/:userId/:page/:important',PotentialMatches.PotentialMatches);
app.get('/adminDashboard/TotalMembers' , totalMembers)
app.get('/adminDashboard/TotalMatches' , getTotalMatches)
app.get('/adminDashboard/TotalLikes' , getTotalLikes)
app.get('/adminDashboard/TotalViews' , getTotalViews)
app.get('/adminDashboard/ActivityPanel' , activityPanelResponse)
app.get('/adminDashboard/ChartResponse' , chartResponse)
app.get('/adminDashboard/MemberCards' , memberCards)
app.get('/adminDashboard/Users/:user' , getUser)
app.get('/get-important-questions/:user' , FetchUserImportants )

app.get('/testMe' , async(req , res)=>{
  try{
    res.status(201).json('wassup bro');
}
catch(err){
 res.json('oh bhai ni chal rah')
}
})


module.exports = app;