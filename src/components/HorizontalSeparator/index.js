import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

function HorizontalSeparator(props) {
  const {
    color,
    thickness,
  } = props;

  return (
    <View style={{ borderWidth: thickness, borderColor: color, width: '100%' }}>
    </View>
  );
}

HorizontalSeparator.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
};

HorizontalSeparator.defaultProps = {
  thickness: 1,
  color: 'black',
};

export default HorizontalSeparator;
