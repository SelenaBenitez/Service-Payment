const Card = require('../models/card');

const registerCard = (req, res) => {
  const { cardNumber, cardHolder, expirationDate, cvv } = req.body;


  if (!cardNumber || !cardHolder || !expirationDate || !cvv) {
    return res.status(400).json({ error: 'Todos los campos de la tarjeta son obligatorios' });
  }


  const newCard = new Card(null, cardNumber, cardHolder, expirationDate, cvv);


  console.log('Tarjeta registrada:', newCard);

  res.status(200).json({ message: 'Tarjeta registrada exitosamente', card: newCard });
};

module.exports = {
  registerCard
};
