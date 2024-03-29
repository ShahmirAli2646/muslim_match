const User = require("../model/user");
const Match = require("../model/matches")
const Like = require("../model/likes")
const View = require("../model/views")
const Profile = require("../model/profile");
const { first } = require("lodash");
const user = require("../model/user");
const views = require("../model/views");

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

    activityPanelResponse: async (req , res) => {
        try{
          const matches = await Match.find({})
          const views = await View.find({})
          const likes = await Like.find({})
          const members = await User.find({})
          res.status(201).json({matches , views , likes , members})
        }
        catch(err){
            res.status(400).send("No New Users");
        }
    },

    memberCards: async (req, res) => {
        try {
            const profiles = await Profile.find({})
            res.status(200).json({ response: profiles, profiles: profiles.length })
        }
        catch (err) {
            res.status(400).send("No Members found");
        }
    },

    getUser: async (req, res) => {
        try {
            const users = await User.findOne({ _id: req.params.user })
            res.status(200).json(users)
        }
        catch (err) {
            res.status(400).send("Invalid user")
        }
    },
    getTotalMatches: async (req, res) => {
        try {
            const matches = await Match.find({})
            const result = matches.map((item, index) => {
                const totalMatchesArray = item.match_id.map((item, index) => {
                    return item
                })
                return totalMatchesArray
            })
            const totalMatchCount = result.map((item, index) => {

                return item.length

            })
            const sum = totalMatchCount.reduce((accumulator, value) => {
                return accumulator + value;
              }, 0);
            res.status(200).json(sum)
        }
        catch (err) {
            res.status(400).send("Invalid user")
        }
    },
    getTotalLikes: async (req, res) => {
        try {
            const likes = await Like.find({})
            const result = likes.map((item, index) => {
                const totalLikesArray = item.like_id.map((item, index) => {
                    return item
                })
                return totalLikesArray
            })
            const totalLikeCount = result.map((item, index) => {

                return item.length

            })
            const sum = totalLikeCount.reduce((accumulator, value) => {
                return accumulator + value;
              }, 0);
            res.status(200).json(sum)
        }
        catch (err) {
            res.status(400).send("Invalid user")
        }
    },
    getTotalViews: async (req, res) => {
        try {
            const views = await View.find({})
            const result = views.map((item, index) => {
                const totalViewsArray = item.view_id.map((item, index) => {
                    return item
                })
                return totalViewsArray
            })
            const totalViewCount = result.map((item, index) => {

                return item.length

            })
            const sum = totalViewCount.reduce((accumulator, value) => {
                return accumulator + value;
              }, 0);
            res.status(200).json(sum)
        }
        catch (err) {
            res.status(400).send("Invalid user")
        }
    },

}