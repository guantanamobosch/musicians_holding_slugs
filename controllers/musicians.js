const express = require('express');

// using router is like using app in the server, but with router it's easier to express all the routes which we make in a controller all in one go
const router = express.Router();


// this is saying that I want the value of the musicians from the object that was exported. this is the ES6 destructuring syntax. if I point it to a directory, it automatically assumes an index.js file
const { Musicians } = require('../models')

let mySeedData = [
    {
        name: "Keith Richards",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n9oi9jo6xR1thoekio1_500.jpg"
    },
    {
        name: "Prince",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n90ek1GlKF1thoekio1_500.jpg"
    },
    {
        name: "John Mayer",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n9sxudWDyC1thoekio1_1280.jpg"
    },
    {
        name: "Matt Bellamy",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n9mbgxN2121thoekio1_400.jpg"
    }
]

// this will be exported at the bottom of the file, and lets server know what to render when the user HTTP requests '/musicians', the string can be empty as it is sort of self-referential to this page
router.get('/', async (req, res) => {
    try {
        let myMusicians;
        if (req.query.s) {
            myMusicians = await Musicians.find({ name: req.query.s })
        } else {
            // you can put a query in the curly brackets here to find specific musicians in the database if you want
            myMusicians = await Musicians.find({})
        }
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

router.get('/seed', async (req, res, next) => {
    try {
        const deletedOldOnes = await Musicians.deleteMany({});
        const addArtists = await Musicians.insertMany(mySeedData)
        console.log(addArtists)
        res.redirect('/musicians')
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/:name', async (req, res, next) => {
    try {
        console.log(req.params)
        const musician = await Musicians.find({ name: req.params.name });
        // console.log(musician)
        res.render('musicians/show.ejs', { musician: musician })
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.post('/abc', async (req, res, next) => {
    try {
        const newArtist = Musicians.create(req.body);
        mySeedData.push(newArtist);
        console.log(newArtist);
        res.redirect('/musicians');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        console.log(req.params);
        const itemGettingDeleted = await Musicians.findByIdAndDelete(req.params.id);
    } catch (stuff) {
        console.log(stuff);
        return next();
    }
})

// when server looks to this file, this .exports command lets it know what the file has to offer, which is everything with 'router.' attached to it
module.exports = router;