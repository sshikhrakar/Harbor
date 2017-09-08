import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ProgressBar from 'react-native-progress/Bar';

import fonts from '../../config/fonts';
import colors from '../../config/colors';
import viewport from '../../utils/viewport';

/**
 * A bottom bar to show progress values.
 *
 * @param {Object} props
 * @returns {jsx}
 */
function HorizontalProgressBar(props) {
  const {
    text,
    value,
    onPress,
    disabled,
  } = props;

  return (
    <View style={ styles.rootContainer }>
      <TouchableOpacity
        activeOpacity={ 0.6 }
        onPress={ onPress }
        style={ styles.container }
        disabled={ disabled || false }
      >
        <View style={ styles.container }>
          <ProgressBar
            progress={ value }
            width={ viewport.width() * 100 }
            height={ 50 }
            borderRadius={ 0 }
            borderWidth={ 0 }
            color={ colors.BLACK }
            style={ styles.progressBar }
          />

          <View style={ styles.textContainer }>
            <Text style={ styles.text }>{ text }</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

HorizontalProgressBar.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rootContainer: {
    bottom: 0,
    height: 50,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: colors.HORIZONTAL_PROGRESS_BAR,
  },

  progressBar: {
    position: 'absolute',
    backgroundColor: colors.HORIZONTAL_PROGRESS_BAR,
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary.LIGHT,
    color: colors.PROGRESS_BAR_TEXT,
  },
});

export default HorizontalProgressBar;
