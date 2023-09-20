const express = require('express');
const router = express.Router();
const {register,login,userAuthentication, generateToken} = require('../controller/auth.controller');
const {validator} = require('../middleware/validator');
const {registerSchema,loginSchema} = require('../middleware/auth.validation');


router.post("/signup",validator(registerSchema),register);
router.post("/login",validator(loginSchema),login);
router.post('/refreshToken',generateToken);
router.get("/user", userAuthentication );

module.exports = router;