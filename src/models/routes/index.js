const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');
const cardController = require('../controllers/cardController');
const paymentController = require('../controllers/paymentController');


router.post('/register-card', cardController.registerCard);
router.post('/execute-payment', paymentController.executePayment);
router.get('/generate-receipt', paymentController.generateReceipt);
router.get('/view-payment-history', paymentController.viewPaymentHistory);
router.post('/receive-notifications', userController.receiveNotifications);

module.exports = router;
