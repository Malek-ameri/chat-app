const express = require('express');
const router = express.Router();
const authRoute = require('./auth.route');
const userRout = require('./user.route');


router.use('/auth',authRoute);
router.use("/user",userRout);


module.exports = router;
