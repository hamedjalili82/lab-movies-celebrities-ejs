// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app)

// default value for title local
const projectName = 'lab-movies-celebrities'
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase()

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`

// 👇 Start handling routes here
const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

const celebRoutes = require('./routes/celebrities.route')
app.use ('/celeb', celebRoutes)

const movieRoutes = require('./routes/movies.route')
app.use ('/movie',movieRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app