const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define collection and schema for Post
let User = new Schema(
  {
    userName: {
      type: String,
    },
    userDiplayId: {
      type: String,
    },
    PostCount: {
      type: Number,
    },
    SignInDate: {
      type: Date,
    }, 
  },
  {
    collection: "users",
  }
)

module.exports = mongoose.model("User", User)
