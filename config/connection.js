// this file needs the dotenv package and lets us configure our site with mongo
require('dotenv').config();
const mongoose = require('mongoose');

// this is the way we get something out of a .env file 'process.env.' - this is the mongoDB link
const connectionString = process.env.MONGO_DB_URI;

// this attaches mongooses to our MongoDB link
mongoose.connect(connectionString);

// mongoDB connection on success
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected... <3`)
})

// mongoDB connection on error
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error', error)
})

// disconnecting from mongoDB
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected')
})