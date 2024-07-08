Feature: Manage Shopping Cart
    
    # As a user
    # I want to manage my shopping Cart
    # So that I can buy the items I want

    Scenario: Adding apple to the shopping cart
        Given a user has an empty shopping cart
        When the user adds an item "Apple" that costs $1.99 to the cart
        Then the cart should contain an "Apple" that costs $1.99
    
    Scenario: Adding orange to the shopping cart
        Given a user has an empty shopping cart
        When the user adds an item "Orange" that costs $2.99 to the cart
        Then the cart should contain an "Orange" that costs $2.99

    Scenario: Adding apple and orange to the shopping cart
        Given a user has an empty shopping cart
        When the user adds an item "Orange" that costs $2.99 to the cart
        And the user adds an item "Apple" that costs $1.99 to the cart
        Then the cart should contain an "Orange" that costs $2.99
        And the cart should contain an "Apple" that costs $1.99