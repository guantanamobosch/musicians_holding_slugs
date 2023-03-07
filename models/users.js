const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a username"],
            unique: [true, "Must be original."]
        },
        password: {
            type: String,
            required: [true, "Please provide a password"]
        }
    },
    {
        timestamps: true
    }
);

const Users = mongoose.model('Users', userSchema)

module.export = Users;