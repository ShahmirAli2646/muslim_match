const User = require("../model/user");
const Profile = require("../model/profile")
const View = require("../model/views")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const equals = require('./equalityhelper')
const _ = require('lodash');
const profile = require("../model/profile");

module.exports = {
    viewProfile : async (req , res) => {
        try {
            const views = await View.findOneAndUpdate(
                { "user_id": req.body.user_id},
                { "$push": { "view_id": req.body.view_id } } ,
                {upsert:true}
             );
            res.status(201).json(views);
        }
        catch(err){
         
        }
    }
}