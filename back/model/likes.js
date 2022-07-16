const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user_id: {type:mongoose.Schema.Types.ObjectId},
  like_id: [{type:Array , default:null}],
} );

module.exports = mongoose.model("like", likeSchema);