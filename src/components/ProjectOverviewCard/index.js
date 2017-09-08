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
      downloadIcon,
      versionNumber,
      lastUpdatedAt,
      projectIconUrl,
    } = this.props;

    return (
      <Animated.View style={{ left: this._animatedPosition }}>
        <TouchableOpacity
          onPress={ onCardPress }
          style={ styles.mainContainer }>
          <View style={ styles.projectIconContainer }>
            <Image
              resizeMethod='scale'
              style={ styles.projectIcon }
              source={ projectIconUrl ? { uri: projectIconUrl } : images.fallbackProjectIcon }
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
              style={ styles.downloadIcon }
              source={ downloadIcon }
            />
          </View>

          <View style={ styles.projectIconContainer }>
            <Image
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
  downloadIcon: PropTypes.number,
  onCardPress: PropTypes.func.isRequired,
  displayName: PropTypes.string.isRequired,
  versionNumber: PropTypes.string.isRequired,
  lastUpdatedAt: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
  },

  projectIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  projectIcon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },

  downloadIcon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },

  infoContainer: {
    flex: 1,
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
    fontSize: 18,
    fontFamily: fonts.primary.SEMI_BOLD,
  },

  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary.REGULAR,
  },
});

export default ProjectOverviewCard;
