const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  user_id: {type:mongoose.Schema.Types.ObjectId},
  match_id: [{type:Array , default:null}],
} );

module.exports = mongoose.model("match", matchSchema);