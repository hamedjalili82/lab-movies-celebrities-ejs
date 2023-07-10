const Celebrity = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

router.get("/", (request, response) => {
    response.send("Celebrity Route")
});

router.get("/create", (request, response) => {
    response.render("celebrities/new-celebrity")
})

router.post("/create", async (request, response) => {
    console.log(request.body)
    const data = request.body

    try {
        const newCelebrity = await Celebrity.create(data)
        console.log(newCelebrity)

        response.redirect(`/celeb/${newCelebrity._id}`)

    } catch (error) {
        console.log(error)

        response.render("celebrities/new-celebrity")
    }

})

module.exports = router