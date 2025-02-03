// const rateLimit = require("express-rate-limit");
// const ApiKey = require("../models/apiKey");
// const ApiPlan = require("../models/apiPlan");

// const rateLimiter = async (req, res, next) => {
//     try {
//         const apiKey = req.headers["x-api-key"];
//         if (!apiKey) {
//             return res.status(403).json({ message: "API key is required" });
//         }

//         const apiKeyRecord = await ApiKey.findOne({ key: apiKey }).populate("userId");
//         if (!apiKeyRecord) {
//             return res.status(403).json({ message: "Invalid API key" });
//         }

//         const user = apiKeyRecord.userId;
//         if (!user || !user.apiPlan) {
//             return res.status(404).json({ message: "User or API Plan not found" });
//         }

//         const apiPlan = await ApiPlan.findById(user.apiPlan).select("max_req_per_sec");
//         if (!apiPlan || !apiPlan.max_req_per_sec) {
//             return res.status(404).json({ message: "API Plan not found or missing rate limit" });
//         }

//         const maxRequests = apiPlan.max_req_per_sec;

//         // Log details for debugging purposes
//         console.log("Rate limit per second:", maxRequests);
//         console.log("API key:", apiKey);
//         console.log("User API Plan:", apiPlan);

//         // Apply rate limit dynamically based on the user's plan
//         const limiter = rateLimit({
//             windowMs: 1000, // 1 second
//             max: maxRequests, // Rate limit from user's API plan
//             message: `Rate limit exceeded! You can make only ${maxRequests} requests per second.`,
//             headers: true, // Include rate limit information in response headers
//         });


//         const resetTime = new Date(1738306852 * 1000);
//         console.log(resetTime.toLocaleString());


//         console.log("Rate limiter applied");

//         // Apply rate limiter middleware
//         limiter(req, res, next);


//     } catch (error) {
//         console.error("Error applying rate limit:", error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// module.exports = rateLimiter;



const rateLimit = require("express-rate-limit");
const ApiKey = require("../models/apiKey");
const ApiPlan = require("../models/apiPlan");


const limiters = new Map();

const getRateLimiter = (apiKey, maxRequests) => {
    if (!limiters.has(apiKey)) {
        const limiter = rateLimit({
            windowMs: 3000,
            max: maxRequests,
            standardHeaders: true,
            legacyHeaders: false,
            handler: (req, res) => {
                console.log(` Rate limit exceeded for API key: ${apiKey}`);
                return res.status(429).json({
                    message: ` Rate limit exceeded! You can make only ${maxRequests} requests per second.`,
                });
            },
        });
        limiters.set(apiKey, limiter);
    }
    return limiters.get(apiKey);
};

const rateLimiter = async (req, res, next) => {
    try {
        const apiKey = req.headers["x-api-key"];
        if (!apiKey) {
            return res.status(403).json({ message: " API key is required" });
        }

        const apiKeyRecord = await ApiKey.findOne({ key: apiKey }).populate("userId");
        if (!apiKeyRecord) {
            return res.status(403).json({ message: " Invalid API key" });
        }

        const user = apiKeyRecord.userId;
        if (!user || !user.apiPlan) {
            return res.status(404).json({ message: " User or API Plan not found" });
        }

        const apiPlan = await ApiPlan.findById(user.apiPlan).select("max_req_per_sec");
        if (!apiPlan || !apiPlan.max_req_per_sec) {
            return res.status(404).json({ message: " API Plan not found or missing rate limit" });
        }

        const maxRequests = apiPlan.max_req_per_sec;

        // Debugging logs
        console.log(" Rate limit per second:", maxRequests);
        console.log(" API key:", apiKey);

        // Use the stored rate limiter per API key
        const limiter = getRateLimiter(apiKey, maxRequests);

        console.log(" Rate limiter applied");

        return limiter(req, res, next);

    } catch (error) {
        console.error(" Error applying rate limit:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = rateLimiter;
