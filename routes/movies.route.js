// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
router.get("/movie", (request, response) => {
    response.send("Movie Route")
})

module.exports = router
