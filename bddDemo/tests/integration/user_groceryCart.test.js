const { GroceryCart } = require('../../src/groceryCart');
const {User} = require('../../src/user')

it('Users can checkout their grocery cart and haev an order added to their order history', () =>{
    // set up
    const user = new User('admin', 'password');
    const cart = new GroceryCart();

    // simulating login
    user.login();

    // add items to cart
    cart.addItem({name: 'Apple', price: 1.5});
    cart.addItem({name: 'Banana', price: 0.99});
    cart.addItem({name: 'Orange', price: 1.43});
    
    // checkout the cart
    cart.checkOut(user);
    
    // expectations
    expect(user.loggedIn).toBeTruthy();
    expect(user.orders).toHaveLength(1);
    expect(user.orders[0].total).toBeCloseTo(3.92);
})

it('Users that ordered more than 5 ordrs should be upgraded to prime', () => {
    // set up
    const user = new User('admin', 'password');
    const cart = new GroceryCart();
    const numOfOrders  = 6;

    // log in
    user.login();

    for (let i = 0; i < numOfOrders;i++){
        // add items to the cart
        cart.addItem({name: 'Apple', price: 1.5});
        cart.addItem({name: 'Banana', price: 0.99});
        cart.addItem({name: 'Orange', price: 1.43});

        // check out the cart
        cart.checkOut(user);
    }

    // expectations
    expect(user.orders).toHaveLength(6);
    expect(user.prime).toBeTruthy();

})