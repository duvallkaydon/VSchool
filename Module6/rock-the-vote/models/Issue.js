const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number
    },
    downVotes: {
        type: Number
    }
})

module.exports = mongoose.model("Issue", issueSchema)