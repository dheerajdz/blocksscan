const mongoose = require('mongoose');

const apiUsageSchema = new mongoose.Schema({
    apiEndpoint: {
        type: String,
        required: true
    },
    requestCount: {
        type: Number,
        default: 0
    },
    lastAccessed: {
        type: Date,
        default: Date.now
    }
});

const ApiUsage = mongoose.model('ApiUsage', apiUsageSchema);

module.exports = ApiUsage;
