const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');


router.get('/',  medicineController.index);
router.post('/', medicineController.store);

module.exports = router;

