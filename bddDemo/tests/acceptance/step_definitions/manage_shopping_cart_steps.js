const {expect} = require('expect')
const {Given, When, Then} = require('@cucumber/cucumber');

const {GroceryCart} = require('../../../src/groceryCart');

Given('a user has an empty shopping cart', function () {
    // Write code here that turns the phrase above into concrete actions
    this.cart = new GroceryCart();
  });

When('the user adds an item {string} that costs ${float} to the cart', function (item, price) {
    // When('the user adds an item Apple that costs ${float} to the cart', function (float) {
    // Write code here that turns the phrase above into concrete actions
    this.cart.addItem({
        item,
        price
    });
});

Then('the cart should contain an {string} that costs ${float}', function (item, price) {
    // Then('the cart should contain {int} Apple that costs ${float}', function (int, float) {
    // Then('the cart should contain {float} Apple that costs ${int}', function (float, int) {
    // Then('the cart should contain {float} Apple that costs ${float}', function (float, float2) {
      // Write code here that turns the phrase above into concrete actions
      expect(this.cart.items).toContainEqual({
        item,
        price
      })
    });