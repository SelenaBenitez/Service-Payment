class Payment {
    constructor(id, amount, status, userId) {
      this.id = id;
      this.amount = amount;
      this.status = status;
      this.userId = userId;
    }
  }
  
  module.exports = Payment;