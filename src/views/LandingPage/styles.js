import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  landingPageContainer: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: colors.SILVER,
  },

  logoContainer: {
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingPageLogo: {
    flex: 1,
    resizeMode: 'contain',
  },

  greetingContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 36,
    alignSelf: 'center',
    fontFamily: fonts.primary.REGULAR,
  },

  subText: {
    fontSize: 18,
    fontFamily: fonts.primary.LIGHT,
  },

  loginContainer: {
    flex: 3,
    padding: 24,
    justifyContent: 'flex-start',
  },

  loginText: {
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: fonts.primary.REGULAR,
  },

  link: {
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: fonts.primary.REGULAR,
    color: colors.SOFT_BLUE,
  },

  disabledLink: {
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: fonts.primary.REGULAR,
    color: colors.ASBESTOS,
  },

  error: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.ERROR,
    fontFamily: fonts.primary.LIGHT,
  },

  emailPasswordContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },

  textInputField: {
    height: 44,
    borderWidth: 0.8,
    borderRadius: 6,
    paddingHorizontal: 10,
    borderColor: colors.ASBESTOS,
    fontFamily: fonts.primary.REGULAR,
  },

  loginButtonContainer: {
    flex: 1,
    paddingVertical: 10,
  },

  button: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ASBESTOS,
  },

  loginButtonText: {
    fontSize: 20,
    marginVertical: 5,
    color: colors.SILVER,
    fontFamily: fonts.primary.LIGHT,
  },

});

export default styles;
