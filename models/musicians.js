const mongoose = require('mongoose')

// this schema demands that information entered on the site adhere to the model of the object format provided here
const musiciansSchema = new mongoose.Schema(
    {
        // name field is required and has to be a string
        name: {
            type: String,
            required: [true, "Please provide a name"]
        },
        // image field is a string and it's both required and it has to be unique
        image: {
            type: String,
            required: [true, "Please provide the URL for an image"],
            unique: [true, "I don't want the same slug pictures multiple times"]
        },
        // instrument field is not required, but is a string if somebody does fill it out
        instrument: String
    },
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our Schema) is the general default and it creates a collection inside of MongoDB that is named from the first argument in this, and it applies the schema above to that collection
const Musicians = mongoose.model('Musicians', musiciansSchema)

module.exports = Musicians;