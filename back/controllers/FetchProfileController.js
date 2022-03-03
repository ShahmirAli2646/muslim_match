const User = require("../model/user");
const Profile = require("../model/profile")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();

module.exports={
    FetchUserProfile :async (req, res) => {
        try{
            const userId = req.params.userId;
            const profile = await Profile.findOne({user:userId},);
            res.status(201).json(profile);
        }
        catch(err){
          console.log(err)
        }

    },
}