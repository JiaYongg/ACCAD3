const { GroceryCart, GroceryCartError } = require('../../src/groceryCart');

describe('Test the grocery list', () => {
  let groceryList;

  beforeEach(() => {
    groceryList = new GroceryCart();
  });

  afterEach(() => {
    groceryList = null;
  });

  test('grocery list is empty', () => {
    expect(groceryList.items.length).toBe(0);
  });

  test('add item to grocery list', () => {
    groceryList.addItem({ name: 'Milk', price: 2.99 });
    expect(groceryList.items.length).toBe(1);
  });

  test('remove item from grocery list', () => {
    groceryList.addItem({ name: 'Milk', price: 2.99 });
    groceryList.removeItem({ name: 'Milk', price: 2.99 });
    expect(groceryList.items.length).toBe(0);
  });

  test('get total of grocery list', () => {
    groceryList.addItem({ name: 'Milk', price: 2.99 });
    groceryList.addItem({ name: 'Eggs', price: 3.99 });
    groceryList.addItem({ name: 'Bread', price: 1.99 });
    expect(groceryList.getTotal()).toBe(8.97);
  });

  test('throws some error when adding more than 5 items', () => {
    groceryList.addItem({ name: 'Milk', price: 2.99 });
    groceryList.addItem({ name: 'Eggs', price: 3.99 });
    groceryList.addItem({ name: 'Bread', price: 1.99 });
    groceryList.addItem({ name: 'Cheese', price: 4.99 });
    groceryList.addItem({ name: 'Butter', price: 2.99 });

    expect(() => {
      groceryList.addItem({ name: 'Steak', price: 10.99 });
    }).toThrow();
  });

  test('throws GroceryError when adding more than 5 items', () => {
    groceryList.addItem({ name: 'Milk', price: 2.99 });
    groceryList.addItem({ name: 'Eggs', price: 3.99 });
    groceryList.addItem({ name: 'Bread', price: 1.99 });
    groceryList.addItem({ name: 'Cheese', price: 4.99 });
    groceryList.addItem({ name: 'Butter', price: 2.99 });

    expect(() => {
      groceryList.addItem({ name: 'Steak', price: 10.99 });
    }).toThrow(GroceryCartError);
  });

  test('throws a specific GroceryError when adding more than 5 items', () => {
    groceryList.addItem({ name: 'Milk', price: 2.99 });
    groceryList.addItem({ name: 'Eggs', price: 3.99 });
    groceryList.addItem({ name: 'Bread', price: 1.99 });
    groceryList.addItem({ name: 'Cheese', price: 4.99 });
    groceryList.addItem({ name: 'Butter', price: 2.99 });

    try {
      groceryList.addItem({ name: 'Steak', price: 10.99 });
    } catch (err) {
      expect(err).toBeInstanceOf(GroceryCartError);
      expect(err.name).toBe('GroceryCartError');
      expect(err.message).toBe('Too many items');
      expect(err.toString()).toBe('GroceryCartError: Too many items');
    }
  });
});
