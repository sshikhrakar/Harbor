import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import colors, { DEFAULT_BUTTON_OPACITY } from '../../config/colors';
import fonts from '../../config/fonts';

/**
 * Button with spinner.
 *
 * @param {String} text
 * @param {String} onPress
 *
 * @returns {jsx}
 */
function ButtonWithSpinner({ text, onPress, isLoading }) {
  return (
    <View style={ styles.buttonContainer }>
      <TouchableOpacity
        style={ styles.button }
        onPress= { onPress }
        activeOpacity={ DEFAULT_BUTTON_OPACITY }
      >
        {
          !isLoading ?
            <Text style={ styles.buttonText }>
              { text }
            </Text>
            :
            <ActivityIndicator animating={ isLoading } color={'white'} />
        }
      </TouchableOpacity>
    </View>
  );
}

ButtonWithSpinner.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    paddingVertical: 10,
  },

  button: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ASBESTOS,
  },

  buttonText: {
    fontSize: 20,
    marginVertical: 5,
    color: colors.SILVER,
    fontFamily: fonts.primary.LIGHT,
  },
});

export default ButtonWithSpinner;
