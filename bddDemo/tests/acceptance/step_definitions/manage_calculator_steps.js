const {expect} = require('expect')
const {Given, When, Then} = require('@cucumber/cucumber');

const {Calculator} = require('../../../src/calculator');

Given('user has a calculator', function () {
    this.calculation = new Calculator();
    });

When('the user adds together {int} and {int}', function (num1, num2) {
    // When('the user adds together {int} and {float}', function (int, float) {
    // When('the user adds together {float} and {int}', function (float, int) {
    // When('the user adds together {float} and {float}', function (float, float2) {
        // Write code here that turns the phrase above into concrete actions
        this.result = this.calculation.add(num1, num2);
    });

When('the user subtracts together {int} and {int}', function (num1, num2) {
    // When('the user subtracts together {int} and {float}', function (int, float) {
    // When('the user subtracts together {float} and {int}', function (float, int) {
    // When('the user subtracts together {float} and {float}', function (float, float2) {
        // Write code here that turns the phrase above into concrete actions
        this.result = this.calculation.subtract(num1, num2);
    });

When('the user multiply together {int} and {int}', function (num1, num2) {
    // When('the user multiply together {int} and {float}', function (int, float) {
    // When('the user multiply together {float} and {int}', function (float, int) {
    // When('the user multiply together {float} and {float}', function (float, float2) {
        // Write code here that turns the phrase above into concrete actions
        this.result = this.calculation.multiply(num1, num2);
    });

When('the user divides together {int} and {int}', function (num1, num2) {
    // When('the user divides together {int} and {float}', function (int, float) {
    // When('the user divides together {float} and {int}', function (float, int) {
    // When('the user divides together {float} and {float}', function (float, float2) {
        // Write code here that turns the phrase above into concrete actions
        this.result = this.calculation.divide(num1, num2);
    });

Then('the total number should be {int}', function (total) {
    // Then('the total number should be {float}', function (float) {
        // Write code here that turns the phrase above into concrete actions
        expect(this.result).toEqual(total);
    });