const express = require("express")
const passport = require("passport")
const { connect } = require("./models/index")
const users = require("./routes/api/users")

const app = express()

app.use(
	express.urlencoded({
		extended: false,
	})
)
app.use(express.json())

// Passport middleware
app.use(passport.initialize())

// Passport config
require("./config/passport")(passport)

// Routes
app.use("/api/users", users)

const env = process.env.NODE_ENV || "default"
const PORT = process.env.PORT || 3001

connect()
	.then(function () {
		app
			.listen(PORT, function () {
				console.log(
					"Application has started in environment " +
						env +
						" and running on port: ",
					PORT
				)
				//console.log(process.env);
			})
			.on("error", function (error) {
				console.log("Unable to start app. Error >>>>", error)
			})
	})
	.catch(function (error) {
		console.log("Failed to setup connecton with database.", error)
	})
