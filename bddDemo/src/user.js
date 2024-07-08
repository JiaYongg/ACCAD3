class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

class User {
  static MIN_PASSWORD_LENGTH = 8;
  #password;

  constructor(username, password) {
    if (password.length < User.MIN_PASSWORD_LENGTH) {
      throw new AuthenticationError('Password too short');
    }

    this.username = username;
    this.#password = password;
    this.loggedIn = false;
    this.orders = [];
    this.prime = false;
  }

  login() {
    // Simulating login functionality
    if (this.username === 'admin' && this.#password === 'password') {
      this.loggedIn = true;
    } else {
      throw new AuthenticationError('Invalid username or password');
    }
  }

  changePassword(oldPassword, newPassword) {
    if (this.#password !== oldPassword) {
      throw new AuthenticationError('Invalid password');
    }
    this.#password = newPassword;

    return this.#password;
  }

  returnPassword() {
    return this.#password;
  }

  logout() {
    // Simulating logout functionality
    this.loggedIn = false;
  }
}

module.exports = { User, AuthenticationError };
