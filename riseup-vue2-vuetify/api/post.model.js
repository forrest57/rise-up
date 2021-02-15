const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define collection and schema for Post
let Post = new Schema(
  {
    link: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "posts",
  }
)

module.exports = mongoose.model("Post", Post)
