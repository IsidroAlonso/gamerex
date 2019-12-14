const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    game: {
        type: ObjectId,
        require: true,
        ref:'Game'
    },
    user: {
        type: ObjectId,
        require: true,
        ref:'User'
    },
    body: {
        type: String, 
        require: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastAccess: {
        type: Date
    }
})