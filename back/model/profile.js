const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  purpose:{ type: String, default: null }, 
  gender:{ type: String, default: null },
  dateofbirth:{ type: String, default: null },
  prayers:{ type: String, default: null },
  islamicInterest:{ type: String, default: null }, 
  user: {type:mongoose.Schema.Types.ObjectId,
    ref:'user'
 },
});



module.exports = mongoose.model("profile", profileSchema);