const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema({
  user_id: {type:mongoose.Schema.Types.ObjectId},
  view_id: [{type:Array , default:null}],
} );

module.exports = mongoose.model("view", viewSchema);