export const LOGIN_VIA_EMAIL = 'LOGIN_VIA_EMAIL';

/**
 * Login via Email action creator.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
function loginViaEmail(email, password) {
  return {
    type: LOGIN_VIA_EMAIL,
    payload: {
      email,
      password,
    },
  };
}

export {
  loginViaEmail,
};
