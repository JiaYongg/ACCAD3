class BankError extends Error {
  constructor(message, amount) {
    super(message);
    this.name = 'BankError';
    this.amount = amount;
  }

  toString() {
    return `${this.message}, amount: ${this.amount}`;
  }
}

class BankAccount {
  static OVERDRAFT_LIMIT = -1000;

  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    const newBalance = this.balance - amount;
    if (newBalance < BankAccount.OVERDRAFT_LIMIT) {
      throw new BankError('Insufficient funds', amount);
    }
    this.balance -= amount;
  }
}

module.exports = {
  BankAccount,
  BankError,
};
