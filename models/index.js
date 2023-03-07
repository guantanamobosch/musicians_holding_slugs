// run the connection to the database that was setup in this file
require('../config/connection.js');

// making all my models available in my index.js
module.exports = {
    Musicians: require('./Musicians'),
    Users: require('./Users')
}