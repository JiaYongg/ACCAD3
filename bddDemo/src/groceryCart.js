class GroceryCartError extends Error {
  constructor(message) {
    super(message);
    this.name = 'GroceryCartError';
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

class GroceryCart {
  static MAX_ITEMS = 5;
  static PRIME_THRESHOLD = 5;

  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (this.items.length >= GroceryCart.MAX_ITEMS) {
      throw new GroceryCartError('Too many items');
    }
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i.name !== item.name);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkOut(user) {
    user.orders.push({
      items: this.items,
      total: this.getTotal(),
    });

    if (user.orders.length > GroceryCart.PRIME_THRESHOLD) {
      user.prime = true;
    }

    this.items = [];
  }
}

module.exports = {
  GroceryCart,
  GroceryCartError,
};
