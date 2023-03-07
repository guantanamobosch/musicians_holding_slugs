const express = require('express');

// using router is like using app in the server, but with router it's easier to express all the routes which we make in a controller all in one go
const router = express.Router();

// this will be exported at the bottom of the file, and lets server know what to render when the user HTTP requests '/musicians', the string can be empty as it is sort of self-referential to this page
router.get('', (req, res) => {
    res.render('musicians/index.ejs')
})

// when server looks to this file, this .exports command lets it know what the file has to offer, which is everything with 'router.' attached to it
module.exports = router;