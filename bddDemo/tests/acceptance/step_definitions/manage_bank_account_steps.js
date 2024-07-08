const {expect} = require('expect')
const {Given, When, Then} = require('@cucumber/cucumber');

const {BankAccount} = require('../../../src/bankAccount');


Given('a user has a bank account with ${float}', function (float) {
    // Given('a user has a bank account with ${float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
      this.account = new BankAccount();
      this.account.balance = 50;
    });

When('the user deposit ${float} into the bank account', function (amount) {
    // When('the user deposit ${float} into the bank account', function (float) {
        // Write code here that turns the phrase above into concrete actions
    this.account.deposit(amount);
    });

When('the user withdraw ${float} from the bank account', function (amount) {
    // Write code here that turns the phrase above into concrete actions
    this.account.withdraw(amount);
    });

Then('the bank account should have ${float}', function (bal) {
    // Write code here that turns the phrase above into concrete actions
    expect(this.account.balance).toEqual(bal);
    });