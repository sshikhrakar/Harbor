/**
 * Checks if email is valid.
 *
 * @param {String} email
 * @returns {Boolean}
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
 * @returns {Boolean}
 */
function isValidPassword(password) {
  if (!password) return false;

  return true;
}

/**
 * Check if the object is empty.
 *
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmptyObject(obj) {
  return !Object.keys(obj).length && obj.constructor === Object;
}

export {
  isValidEmail,
  isEmptyObject,
  isValidPassword,
};

