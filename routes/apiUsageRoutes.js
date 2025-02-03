const express = require('express');
const router = express.Router();
const trackRouteUsage = require('../middlewares/Apiusage'); // Middleware to track route usage
const { getAllUsageStatistics } = require('../controllers/ApiUsage');

// Example API route with usage tracking
router.get('/some-api-endpoint', trackRouteUsage, (req, res) => {
    res.json({ message: 'API request successful' });
});

// Admin route to get all API usage statistics
router.get('/admin/all-usage-statistics', trackRouteUsage, getAllUsageStatistics);

module.exports = router;