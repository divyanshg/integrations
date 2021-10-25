const mongoose = require("mongoose")

const appletSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    triggerService: {
        type: String,
        required: true
    },
    actionService: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("applets", appletSchema)
