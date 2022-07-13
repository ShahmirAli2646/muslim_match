const User = require("../model/user");
const Match = require("../model/matches")
const Profile = require("../model/profile");
const { first } = require("lodash");
const user = require("../model/user");

module.exports = {
    totalMembers: async (req, res) => {
        try {
            const allUsers = await User.find({})
            const totalUsers = allUsers.length
            res.status(201).json(totalUsers);
        }
        catch (err) {
            res.status(400).send("No Users Found");
        }
    },

    chartResponse: async (req, res) => {
        try {
            const allUsers = await User.find({})
            const totalUsers = allUsers.length
            const matches = await Match.find({})
            const totalMatches = matches.map((item, index) => {
                const matchesToReturn = item.match_id.map((item, index) => {
                    return item
                })

                return matchesToReturn
            })
            const noToReturn = totalMatches[0].length
            res.status(201).json({ totalUsers, noToReturn });

        }
        catch (err) {
            res.status(400).send("No New Users");
        }


    },

    activityPanelResponse: async () => {

    },

    memberCards: async (req, res) => {
        try {
            const profiles = await Profile.find({})
            res.status(200).json({response:profiles , profiles:profiles.length})  
        }
        catch (err) {
            res.status(400).send("No Members found");
        }
    },

    getUser : async (req , res) => {
        try{ 
            const users = await User.findOne({_id:req.params.user})
            res.status(200).json(users)
        }
        catch(err){
            res.status(400).send("Invalid user")
        }
    }
}