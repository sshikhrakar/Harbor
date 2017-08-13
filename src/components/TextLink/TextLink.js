import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors, { DEFAULT_BUTTON_OPACITY } from '../../config/colors';

function TextLink(props) {

  const {
    onPress,
    disabled,
    text,
    style,
    activeOpacity,
  } = props;

  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ styles.linkContainer }
      disabled={ disabled }
      activeOpacity={ activeOpacity }
    >
      <Text style={ [styles.link, style] }> { text } </Text>
    </TouchableOpacity>
  );

}

TextLink.propTypes = {
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  activeOpacity: PropTypes.number,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

TextLink.defaultProps = {
  disabled: false,
  activeOpacity: DEFAULT_BUTTON_OPACITY,
};

const styles = StyleSheet.create({
  linkContainer: {
  },

  link: {
    color: colors.SOFT_BLUE,
  },
});

export default TextLink;
