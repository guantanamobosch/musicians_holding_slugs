// pulling express into the server file and logging its invocation into 'app'
const express = require('express');
const app = express();

// let express know that I have a views directory and to dig through it for view pages
app.set('view engine', 'ejs');

app.use(express.static('public'));

// set up simple route for homepage
app.get('/', (req, res) => {
    res.render('home');
})

// catch all route to render 404 page whenever anyone uses a nonexistent url with my domain
app.get('/*', (req, res) => {
    res.render('404')
})

// setting up port to listen on for localhost and console logging
app.listen(4000, () => {
    console.log('Listening on port 4000');
})