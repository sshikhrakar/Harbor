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
    flex: 1.5,
    justifyContent: 'center',
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  boldText: {
    fontSize: 20,
    color: colors.BLACK,
    fontFamily: fonts.primary.SEMI_BOLD,
  },

  normalText: {
    fontSize: 14,
    fontFamily: fonts.primary.REGULAR,
  },

  buttonContainer: {
    flex: 1,
    paddingVertical: 10,
  },

  installButton: {
    elevation: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: colors.BLUE,
  },

  installButtonText: {
    fontSize: 14,
    color: colors.WHITE,
    fontFamily: fonts.primary.BOLD,
  },

  bodyContainer: {
    flex: 1,
  },

  buildItemContainer: {
    padding: 10,
  },

  title: {
    paddingVertical: 10,
  },

  changelog: {
    paddingVertical: 5,
  },

  buildTitleText: {
    fontSize: 18,
    color: colors.BLACK,
    fontFamily: fonts.primary.SEMI_BOLD,
  },

  buildSubTitleText: {
    fontSize: 14,
    fontFamily: fonts.primary.SEMI_BOLD,
  },

  buildNormalText: {
    fontSize: 14,
    fontFamily: fonts.primary.REGULAR,
  },
});

export default styles;
