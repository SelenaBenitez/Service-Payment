const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/receive-notifications', userController.receiveNotifications);

module.exports = router;
