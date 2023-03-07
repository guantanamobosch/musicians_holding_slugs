// pulling express into the server file and logging its invocation into 'app'
const express = require('express');
const app = express();



// setting up port to listen on for localhost and console logging
app.listen(4000, () => {
    console.log('Listening on port 4000');
})