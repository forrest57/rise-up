const config = require("../config/auth.config")
const db = require("../models")
const User = db.user
const Role = db.role

var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    img: req.body.img
  })

  user.save((err, user) => { //save on db
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    if (req.body.roles) {
      Role.find( //role exists in db??
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err })
            return
          }

          user.roles = roles.map((role) => role._id)
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err })
              return
            }

            res.send({ message: "User was registered successfully!" })
          })
        }
      )
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        user.roles = [role._id]
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err })
            return
          }

          res.send({ message: "User was registered successfully!" })
        })
      })
    }
  })
}
exports.update = (req, res) => {
  User.findByIdAndUpdate(req.body.id,{"img": req.body.img},{useFindAndModify: false},(err,result)=>{
    if (err) {
      res.status(500).send({ message: err })
      return
    }
    if (!result) { //user not found
      return res.status(404).send({ message: "User Not found." })
    }
    res.status(200).send(result)
  })
}

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username, //find in db with same uname
  })
    .populate("roles", "-__v")
    .exec((err, user) => { //runs concatenated commands
      if (err) {
        res.status(500).send({ message: err })
        return
      }

      if (!user) { //user not found
        return res.status(404).send({ message: "User Not found." })
      }
    
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        })
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      })

      var authorities = []

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        img: user.img,
        roles: authorities,
        accessToken: token,
      })
    })
}
