const express = require('express');
const router = express.Router();
const { getAllUser } = require('../controller/user.controller');
const {protect} = require('../controller/auth.controller');

router.get("/",protect ,getAllUser);

module.exports = router;