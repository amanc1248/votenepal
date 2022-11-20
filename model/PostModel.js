const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required:true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
},{timestamps:true});

module.exports = User = mongoose.model("Post", postSchema);
