const express = require('express');

// using router is like using app in the server, but with router it's easier to express all the routes which we make in a controller all in one go
const router = express.Router();


// this is saying that I want the value of the musicians from the object that was exported. this is the ES6 destructuring syntax. if I point it to a directory, it automatically assumes an index.js file
const { Musicians } = require('../models')



// this will be exported at the bottom of the file, and lets server know what to render when the user HTTP requests '/musicians', the string can be empty as it is sort of self-referential to this page
router.get('/', async (req, res) => {
    try {
        // you can put a query in the curly brackets here to find specific musicians in the database if you want
        const myMusicians = await Musicians.find({})
        console.log(myMusicians)
        res.render('musicians/index.ejs', { musicians: myMusicians })
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/new', (req, res) => {
    res.render('musicians/new.ejs')
})

router.get('/:id', async (req, res, next) => {
    try {
        const musician = await Musicians.findById(req.params.id);
        console.log(musician)
        res.render('musicians/show.ejs', musician)
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.post('/abc', async (req, res, next) => {
    try {
        const newArtist = Musicians.create(req.body);
        console.log(newArtist);
        res.redirect('/musicians');
    } catch (err) {
        console.log(err);
        return next();
    }
})

// when server looks to this file, this .exports command lets it know what the file has to offer, which is everything with 'router.' attached to it
module.exports = router;