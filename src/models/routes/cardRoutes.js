const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');


router.post('/register-card', cardController.registerCard);

module.exports = router;
