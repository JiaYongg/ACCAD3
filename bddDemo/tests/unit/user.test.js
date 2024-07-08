const { User, AuthenticationError } = require('../../src/user');

describe('Testing the User class', () => {
  let user;

  describe('Creating a user with a password that is too short', () => {
    test('throws an error', () => {
      try {
        user = new User('admin', 'pass');
      } catch (err) {
        expect(err).toBeInstanceOf(AuthenticationError);
        expect(err.name).toBe('AuthenticationError');
        expect(err.message).toBe('Password too short');
        expect(err.toString()).toBe('AuthenticationError: Password too short');
      }
    });
  });

  describe('User with correct credentials', () => {
    beforeEach(() => {
      user = new User('admin', 'password');
    });

    afterEach(() => {
      user = null;
    });

    test('user has username', () => {
      expect(user.username).toBe('admin');
    });

    test('user password is private', () => {
      expect(user.password).toBeUndefined();
    });

    test('user can login with correct credentials', () => {
      user.login();
      expect(user.loggedIn).toBeTruthy();
    });

    test('user can change password', () => {
      user.changePassword('password', 'newPassword');
      expect(user.returnPassword()).toBe('newPassword');
    });

    test('user cannot change password with wrong old password', () => {
      try {
        user.changePassword('wrongPassword', 'newPassword');
      } catch (error) {
        expect(error).toBeInstanceOf(AuthenticationError);
        expect(error.name).toBe('AuthenticationError');
        expect(error.message).toBe('Invalid password');
      }
    });

    test('user can logout', () => {
      user.logout();
      expect(user.loggedIn).toBeFalsy();
    });
  });

  describe('User with wrong credentials', () => {
    beforeEach(() => {
      user = new User('admin', 'password1');
    });

    afterEach(() => {
      user = null;
    });

    test('user cannot login with wrong credentials', () => {
      try {
        user.login();
      } catch (error) {
        expect(error).toBeInstanceOf(AuthenticationError);
        expect(error.name).toBe('AuthenticationError');
        expect(error.message).toBe('Invalid username or password');
        expect(error.toString()).toBe('AuthenticationError: Invalid username or password');
      }
    });
  });
});
