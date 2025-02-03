const ApiKey = require('../models/apiKey');




// const getUsageStatistics = async (req, res) => {
//     const apiKey = req.headers['x-api-key'];



//     if (!apiKey) {
//         return res.status(403).json({ error: 'API key required' });
//     }



//     try {


//         const apiKeyRecord = await ApiKey.findOne({
//             key: apiKey
//         });

//         if (!apiKeyRecord) {
//             return res.status(401).json({ error: 'Invalid API key' });
//         }

//         const usage = await ApiUsage.find({
//             apiKeyId: apiKeyRecord._id
//         });

//         if (!usage.length) {
//             return res.status(404).json({ error: 'No usage data found' });
//         }

//         res.json(usage);

//     } catch (error) {
//         console.error('Error fetching usage statistics:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };






const ApiUsage = require('../models/ApiUsage');

const getAllUsageStatistics = async (req, res) => {
    try {
        // Fetch all API usage data
        const usageData = await ApiUsage.find();

        // Format the data to include relevant information
        const formattedData = usageData.map((usage) => ({
            apiEndpoint: usage.apiEndpoint,
            requestCount: usage.requestCount,
            lastAccessed: usage.lastAccessed,
            createdAt: usage.createdAt
        }));

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching all API usage statistics:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getAllUsageStatistics };





