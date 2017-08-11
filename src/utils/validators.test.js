import { isValidEmail, isValidPassword } from './validators';

describe('UTILITY: VALIDATORS', () => {

  it('isValidEmail should return true for valid email', () => {
    const email = 'foobar@gmail.com';

    expect(isValidEmail(email)).toBe(true);
  });

  it('isValidEmail should return false for invalid email', () => {
    const email = 'foobar';

    expect(isValidEmail(email)).toBe(false);
  });

  it('isValidPassword should return false for empty password', () => {
    const password = '';

    expect(isValidPassword(password)).toBe(false);
  });

});
