const express = require("express");
const { createUser, getUsers } = require("../controllers/user");
const trackApiUsage = require('../middlewares/Apiusage');


const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);

module.exports = router;