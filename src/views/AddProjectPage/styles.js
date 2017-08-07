import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  addProjectContainer: {
    flex: 1,
    backgroundColor: colors.SILVER,
  },

  headerContainer: {
    flex: 0.12,
    borderBottomWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  downArrowContainer: {
    flex: 0.5,
    paddingTop: 6,
  },

  downArrowIcon: {
    flex: 1,
    resizeMode: 'contain',
  },

  bodyContainer: {
    flex: 1,
  },

});

export default styles;
