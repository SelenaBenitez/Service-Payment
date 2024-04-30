const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');


router.post('/execute-payment', paymentController.executePayment);
router.get('/generate-receipt', paymentController.generateReceipt);
router.get('/view-payment-history', paymentController.viewPaymentHistory);

module.exports = router;
