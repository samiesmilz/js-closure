function createAccount(pin, amount = 0) {
  const account = {
    pin,
    balance: amount,

    checkBalance(inputPin) {
      return this.authenticatePin(inputPin)
        ? `$${this.balance}`
        : "Invalid PIN.";
    },

    deposit(inputPin, depositAmount) {
      if (!this.authenticatePin(inputPin)) return "Invalid PIN.";

      this.balance += depositAmount;
      return `Successfully deposited $${depositAmount}. Current balance: $${this.balance}.`;
    },

    withdraw(inputPin, withdrawalAmount) {
      if (!this.authenticatePin(inputPin)) return "Invalid PIN.";

      if (withdrawalAmount > this.balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }

      this.balance -= withdrawalAmount;
      return `Successfully withdrew $${withdrawalAmount}. Current balance: $${this.balance}.`;
    },

    changePin(oldPin, newPin) {
      if (!this.authenticatePin(oldPin)) return "Invalid PIN.";

      this.pin = newPin;
      return "PIN successfully changed!";
    },

    authenticatePin(inputPin) {
      return this.pin === inputPin;
    },
  };

  return account;
}

module.exports = { createAccount };
