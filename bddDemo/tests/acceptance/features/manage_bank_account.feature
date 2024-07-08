Feature: Manage Bank Account
    # As a user
    # I want to be able to deposit and withdraw from my bank Account
    # So that I can manage my finances efficiently

    Scenario: Deposit to the bank account
        Given a user has a bank account with $50
        When the user deposit $50 into the bank account
        Then the bank account should have $100

    Scenario: Withdraw from the bank account
        Given a user has a bank account with $50
        When the user withdraw $20.50 from the bank account
        Then the bank account should have $29.50