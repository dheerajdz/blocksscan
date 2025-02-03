const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },

    email:
    {
        type: String,
        required: true,
        unique: true
    },


    apiKeys:
        [{
            type: mongoose.Schema.Types.ObjectId, ref: "ApiKey"
        }],


    apiPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApiPlan'
    }
});

module.exports = mongoose.model("User", userSchema);