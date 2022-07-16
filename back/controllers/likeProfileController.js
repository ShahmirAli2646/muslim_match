const User = require("../model/user");
const Profile = require("../model/profile")
const Like = require("../model/likes")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const equals = require('./equalityhelper')
const _ = require('lodash');
const profile = require("../model/profile");

module.exports = {
    likeProfile : async (req , res) => {
        try {
            const likes = await Like.findOneAndUpdate(
                { "user_id": req.body.user_id},
                { "$push": { "like_id": req.body.like_id } } ,
                {upsert:true}
             );
            res.status(201).json(likes);
        }
        catch(err){
         
        }
    }
}