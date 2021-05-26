const express = require("express")
const userRoutes = express.Router()
let User = require("../models/user.model")


userRoutes.route("/update/:id").post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (!user) res.status(404).send("data is not found")
      else {
        user.title = req.body.title
        user.body = req.body.body
        user.img = req.body.img
        user
          .save()
          .then(() => {
            res.json("Update complete")
          })
          .catch(() => {
            res.status(400).send("unable to update the database")
          })
      }
    })
  })
  module.exports=userRoutes