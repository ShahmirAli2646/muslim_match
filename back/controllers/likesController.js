const User = require("../model/user");
const Profile = require("../model/profile")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const { equals } = require("./equalityhelper");
const _ = require('lodash');
const profile = require("../model/profile");
const Like = require("../model/likes")

module.exports = {
    Likes: async (req, res) => {
        try{
            const userId = req.params.userId;
            var perPage = 3
            var page = Math.max(0, req.params.page)
            //run matching algorithm
            const like = await Like.find({user_id : userId})
             const FinalResult = like.map((item , index)=>{
                const likeArray  = item.like_id.map((item , index )=>{
                     return item
                })
                const paginate = (likeArray, perPage, page) => {
                    return likeArray.slice((page - 1) * perPage, page * perPage);
                }
                const result = paginate(likeArray, perPage, page)
                return result
             })
           
            res.status(201).json(FinalResult);
        }
        catch(err){
           
        }
       
    },

    
}