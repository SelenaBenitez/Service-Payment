class Card {
    constructor(id, cardNumber, cardHolder, expirationDate, cvv) {
      this.id = id;
      this.cardNumber = cardNumber;
      this.cardHolder = cardHolder;
      this.expirationDate = expirationDate;
      this.cvv = cvv;
    }
  }
  
  module.exports = Card;