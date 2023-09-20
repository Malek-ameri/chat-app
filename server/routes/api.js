const express = require('express');
const router = express.Router();
const authRoute = require('./auth.route');
const userRout = require('./user.route');
const messageRoute = require('./message.route');


router.use('/auth',authRoute);
router.use("/user",userRout);
router.use("/message",messageRoute);


module.exports = router;
