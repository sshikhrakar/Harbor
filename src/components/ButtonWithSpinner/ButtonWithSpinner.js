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
 * @param {Object} props
 *
 * @returns {jsx}
 */
function ButtonWithSpinner(props) {

  const {
    text,
    onPress,
    isLoading,
    disabled,
    textStyle,
    buttonStyle,
    activeOpacity,
  } = props;

  return (
    <View style={ styles.buttonContainer }>
      <TouchableOpacity
        style={ [styles.button, buttonStyle] }
        onPress= { onPress }
        activeOpacity={ activeOpacity }
        disabled={ disabled || isLoading }
      >
        {
          !isLoading ?
            <Text style={ [styles.buttonText, textStyle] }>
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
  textStyle: Text.propTypes.style,
  buttonStyle: View.propTypes.style,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  activeOpacity: PropTypes.number.isRequired,
};

ButtonWithSpinner.defaultProps = {
  disabled: false,
  activeOpacity: DEFAULT_BUTTON_OPACITY,
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
