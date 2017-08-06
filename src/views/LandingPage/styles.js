import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  landingPageContainer: {
    flex: 1,
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
    flex: 2,
  },

  greetingBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    fontSize: 36,
    marginVertical: 10,
    fontFamily: fonts.primary.REGULAR,
  },

  subText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: fonts.primary.LIGHT,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: colors.ASBESTOS,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.primary.REGULAR,
  },

});

export default styles;
