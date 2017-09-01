import {
  isValidEmail,
  isEmptyObject,
  isValidPassword,
} from './validators';

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

  it('isValidPassword should return false for password less than 8 characters', () => {
    const password = '1234567'; // 7 chars

    expect(isValidPassword(password)).toBe(false);
  });

  it('isValidPassword should return true for password of greater than 8 chars', () => {
    const password = '12345678'; // 8 chars

    expect(isValidPassword(password)).toBe(true);
  });


  it('should return false for non-empty objects', () => {
    expect(isEmptyObject({ a: 'b' })).toBe(false);
  });

  it('should return true for empty objects', () => {
    expect(isEmptyObject({})).toBe(true);
  });

});
