// this file needs the dotenv package and lets us configure our site with mongo
require('dotenv').config();

// this is the way we get something out of a .env file 'process.env.'
console.log(process.env.MONGO_DB_URI);