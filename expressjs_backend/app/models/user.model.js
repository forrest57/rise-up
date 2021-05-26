const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define collection and schema for Post
const User = new Schema(
  {
    username: String,
    email: String,
    password: String,
    img: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  },
  {
    collection: "users",
  }
)

module.exports = mongoose.model("User", User)
