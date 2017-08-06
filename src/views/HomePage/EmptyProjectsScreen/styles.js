import { StyleSheet } from 'react-native';

import fonts from '../../../config/fonts';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
  emptyProjectsContainer: {
    flex: 1,
    backgroundColor: colors.SILVER,
  },

  imageContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  image: {
    flex: 0.3,
    resizeMode: 'contain',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  mainTextContainer: {
    marginVertical: 8,
  },

  mainText: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fonts.primary.REGULAR,
  },

  subText: {
    fontSize: 16,
    fontFamily: fonts.primary.LIGHT,
  },
});

export default styles;
