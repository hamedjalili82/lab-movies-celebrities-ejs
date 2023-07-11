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
    const newCelebData = request.body

    try {
        const newCelebrity = await Celebrity.create(newCelebData)
        console.log(newCelebrity)

        response.redirect(`/celeb/${newCelebrity._id}`)

    } catch (error) {
        console.log(error)

        response.render("celebrities/new-celebrity")
    }

})

router.get ("/celebrities", async (request, response) => {


    try {
        const findCelebrity = await Celebrity.find()
        console.log("success")

        response.render("celebrities/celebrities", { celebrities: findCelebrity});

    } catch (error) {
        console.log(error)
    }
})

module.exports = router
