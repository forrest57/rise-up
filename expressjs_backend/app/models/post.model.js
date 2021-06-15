const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema(
  {
    link: String,

    description: String,

    votes: Number,

    displayID: Number,

    displayLink: String,

    img: String,

    poster: {
      //posting user
      username: String,
      id: String,
      img: String,
    },
    comments: [
      {
        text: String,
        votes: Number,
        Poster: {
          name: String,
          id: String,
          img: String,
        },
      },
    ],
  },
  {
    collection: "posts",
  }
);

module.exports = mongoose.model("Post", Post);
