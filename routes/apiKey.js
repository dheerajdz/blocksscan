const express = require("express");
const { createApiKey, getApiKeysByUserId } = require("../controllers/apiKey");
const trackApiUsage = require('../middlewares/Apiusage');


const router = express.Router();


router.post("/", createApiKey);


router.get("/:userId", trackApiUsage, getApiKeysByUserId);
// router.get("/:userId", getApiKeysByUserId);

module.exports = router;