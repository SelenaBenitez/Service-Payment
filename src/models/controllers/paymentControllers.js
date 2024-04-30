const Payment = require('../models/payment');

const executePayment = (req, res) => {
  const { amount, userId } = req.body;


  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'El monto del pago es inválido' });
  }
  if (!userId) {
    return res.status(400).json({ error: 'Se requiere un ID de usuario válido' });
  }

  const newPayment = new Payment(null, amount, 'pendiente', userId);


  console.log('Pago ejecutado:', newPayment);

  res.status(200).json({ message: 'Pago ejecutado exitosamente', payment: newPayment });
};

const generateReceipt = (req, res) => {

};

const viewPaymentHistory = (req, res) => {

};

module.exports = {
  executePayment,
  generateReceipt,
  viewPaymentHistory
};
