import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 24,
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

  subText: {
    fontSize: 18,
    fontFamily: fonts.primary.LIGHT,
  },

  error: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.ERROR,
    fontFamily: fonts.primary.LIGHT,
  },

  emailPasswordContainer: {
    flex: 1,
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

  modalButtonsContainer: {
    flex: 1,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ASBESTOS,
  },

  cancelButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.CRIMSON_RED,
  },


});

export default styles;
