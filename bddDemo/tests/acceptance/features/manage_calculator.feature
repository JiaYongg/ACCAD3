Feature: Manage Calculation
    # As a user
    # I want to be able to do simple calculations
    # So that I can calculation without calculating mentally

    Scenario: Add
        Given user has a calculator
        When the user adds together 6 and 2
        Then the total number should be 8

    Scenario: Subtract
        Given user has a calculator
        When the user subtracts together 6 and 2
        Then the total number should be 4

    Scenario: Multiply
        Given user has a calculator
        When the user multiply together 6 and 2
        Then the total number should be 12

    Scenario: Division
        Given user has a calculator
        When the user divides together 6 and 2
        Then the total number should be 3