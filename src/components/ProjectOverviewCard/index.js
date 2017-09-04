import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';
import images from '../../config/images';

/**
 * Small card view for each project.
 *
 * @param {Object} props
 * @returns {Component}
 */
class ProjectOverviewCard extends Component {

  constructor() {
    super();

    this._animatedPosition = new Animated.Value(-100);
  }

  componentDidMount() {
    Animated.spring(this._animatedPosition, {
      toValue: 0,
      velocity: 0.01,
      friction: 5,
    }).start();
  }

  render() {
    const {
      displayName,
      onCardPress,
      versionNumber,
      lastUpdatedAt,
    } = this.props;

    return (
      <Animated.View style={{ left: this._animatedPosition }}>
        <TouchableOpacity
          onPress={ onCardPress }
          style={ styles.mainContainer }>
          <View style={ styles.projectIconContainer }>
            <Image
              resizeMethod='scale'
              source={ images.fallbackProjectIcon }
            />
          </View>

          <View style={ styles.infoContainer }>
            <View style={ styles.infoItem }>
              <Text style={ styles.projectTitle }> { displayName } </Text>
            </View>

            <View style={ styles.infoItem }>
              <Text style={ styles.staticTitleText }> Version: </Text>
              <Text style={ styles.subTitle }> { versionNumber } </Text>
            </View>

            <View style={ styles.infoItem }>
              <Text style={ styles.staticTitleText }> Last Update: </Text>
              <Text style={ styles.subTitle }> { lastUpdatedAt } </Text>
            </View>
          </View>

          <View style={ styles.projectIconContainer }>
            <Image
              resizeMethod='scale'
              tintColor={ colors.GREY }
              source={ images.rightArrowIcon }
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

}

ProjectOverviewCard.propTypes = {
  projectIconUrl: PropTypes.string,
  onCardPress: PropTypes.func.isRequired,
  displayName: PropTypes.string.isRequired,
  versionNumber: PropTypes.string.isRequired,
  lastUpdatedAt: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    width: '100%',
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 3,
    marginVertical: 5,
    borderColor: colors.ASBESTOS,
    backgroundColor: colors.WHITE,
  },

  projectIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  projectIcon: {
    alignSelf: 'center',
  },

  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  staticTitleText: {
    fontSize: 14,
    fontFamily: fonts.primary.LIGHT,
  },

  projectTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.SEMI_BOLD,
  },

  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary.REGULAR,
  },
});

export default ProjectOverviewCard;
