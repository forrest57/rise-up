const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dbConfig = require("./app/config/db.config")
const compression = require('compression')
const userRoutes = require("./app/routes/user.modify.routes")
const postRoute = require("./app/routes/post.routes")

const app = express()
app.use(compression())

var corsOptions = {
  origin: "http://localhost:8080",
}
app.use(cors(corsOptions))

//parse json requests
app.use(bodyParser.json())

//parse x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }))

//db
const db = require("./app/models")
const Role = db.role

//post routes
app.use("/posts", postRoute)
app.use("/users", userRoutes)
// app.use("/users", userRoute)

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.")
    initial()
  })
  .catch((err) => {
    console.error("Connection error", err)
    process.exit()
  })

//routes
require("./app/routes/auth.routes")(app)
require("./app/routes/user.routes")(app)

//set port and listen to requests
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'moderator' to roles collection")
      })

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'admin' to roles collection")
      })
    }
  })
}
