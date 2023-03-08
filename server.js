// pulling express into the server file and logging its invocation into 'app'
const express = require('express');
const app = express();

// brings in the exports from my musicians controller
const musiciansController = require('./controllers/musicians');

// let express know that you have a views directory and to dig through it for view pages
app.set('view engine', 'ejs');

// this lets the computer know to look for CSS, images, and DOM manipulation in the 'public' directory
app.use(express.static('public'));

// Forms do not come in the way that you would want them to normally. Need to make sure that you parse the info so that it works alongside EJS. Parses the info in express into something that will be in the req.body
// you can also npm body-parser and invoke it to do the same
app.use(express.urlencoded({ extended: false }))

// set up simple route for homepage
app.get('/', (req, res) => {
    res.render('home');
})

// this is saying that I want to use all the routes from my musicians controller, and the first argument sets a new base URL for those routes
app.use('/musicians', musiciansController);

// catch all route to render 404 page whenever anyone uses a nonexistent url with my domain
app.get('/*', (req, res) => {
    res.render('404')
})

// setting up port to listen on for localhost and console logging
app.listen(4000, () => {
    console.log('Listening on port 4000');
})