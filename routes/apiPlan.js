const express = require('express');
const { createApiPlan, getAllApiPlans } = require('../controllers/apiPlan');
const { switchApiPlan } = require('../controllers/switchPlan');
const ratelimiter = require("../middlewares/rateperlimit")
const trackApiUsage = require('../middlewares/Apiusage');



const router = express.Router();


router.post('/create-plan', createApiPlan);



router.get('/api-plans', getAllApiPlans);


router.put('/switch-plan', ratelimiter, switchApiPlan);



module.exports = router;
