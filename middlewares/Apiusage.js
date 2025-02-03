const ApiUsage = require('../models/ApiUsage');
const ApiKey = require('../models/apiKey');
const ApiPlan = require('../models/apiPlan')






const trackRouteUsage = async (req, res, next) => {
    try {
        const { originalUrl } = req;


        let usage = await ApiUsage.findOne({ apiEndpoint: originalUrl });

        if (!usage) {

            usage = new ApiUsage({
                apiEndpoint: originalUrl,
                requestCount: 1
            });
        } else {

            usage.requestCount += 1;
            usage.lastAccessed = Date.now();
        }


        await usage.save();


        next();
    } catch (error) {
        console.error('Error tracking route usage:', error);
        next(error);
    }
};

module.exports = trackRouteUsage;

