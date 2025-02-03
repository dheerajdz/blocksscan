const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const apiKeyRoutes = require('./routes/apiKey')
const apiPlanRoutes = require('./routes/apiPlan')
const apiUsageRoutes = require('./routes/apiUsageRoutes');
const trackRouteUsage = require('./middlewares/Apiusage');



const app = express();
app.use(express.json());


app.use(trackRouteUsage)

// Routes
app.use("/api/users", userRoutes);
app.use("/api/keys", apiKeyRoutes);
app.use("/api/apiplans", apiPlanRoutes);
app.use('/apistat', apiUsageRoutes);




module.exports = app;