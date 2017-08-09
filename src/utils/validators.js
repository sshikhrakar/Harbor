/**
 * Checks if email is valid.
 *
 * @param {String} email
 * @returns {String}
 */
function isValidEmail(email) {
  /* eslint-disable */
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* eslint-enable */

  return re.test(email);
}

/**
 * Checks if password is valid.
 *
 * @param {String} password
 * @returns {String}
 */
function isValidPassword(password) {
  if (!password) return false;

  return true;
}

export {
  isValidEmail,
  isValidPassword,
};
