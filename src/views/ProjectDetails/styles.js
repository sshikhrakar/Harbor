import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_SILVER,
  },

  headerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectIcon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },

  infoContainer: {
    flex: 2,
    justifyContent: 'center',
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  boldText: {
    fontSize: 20,
    fontFamily: fonts.primary.SEMI_BOLD,
  },

  normalText: {
    fontSize: 14,
    fontFamily: fonts.primary.REGULAR,
  },

  buttonContainer: {
    paddingVertical: 10,
  },

  installButton: {
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
  },

  installButtonText: {
    fontSize: 14,
    color: colors.WHITE,
    fontFamily: fonts.primary.BOLD,
  },
});

export default styles;
