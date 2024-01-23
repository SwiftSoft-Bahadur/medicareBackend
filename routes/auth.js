const express = require('express');
const router = express.Router();

const passportjwt = require('../middleware/passportJWT')();
const authController = require('../controllers/authController');
const { isEmail, hasPassword, hasName } = require('../validators/validators');

router.post("/login", authController.login);
router.post("/signup", [isEmail, hasPassword, hasName], authController.signup);
router.get("/me", passportjwt.authenticate(), authController.me);
module.exports = router;