const mongoose = require("mongoose");
const app = require("./app");


const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/testdb"; // Replace with your DB URI

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(" Connected to MongoDB");
        app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
    })
    .catch((err) => console.error(" MongoDB connection error:", err));


