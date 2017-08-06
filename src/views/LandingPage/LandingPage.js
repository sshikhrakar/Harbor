import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';

import styles from './styles';
import images from '../../config/images';
import { screenRegistry } from '../../screenRegistry';
import colors, { DEFAULT_BUTTON_OPACITY } from '../../config/colors';

function LandingPage(props) {

  const { onPress } = props;

  return (
    <View style={ styles.landingPageContainer }>
      <View style={ styles.logoContainer}>
        <Image
          style={ styles.landingPageLogo }
          source={ images.harborLogo }
          tintColor={ colors.GREY }
        />
      </View>

      <View style={ styles.greetingContainer}>
        <View style={ styles.greetingBox }>
          <Text style={ styles.mainText }> Test Harbor </Text>
          <Text style={ styles.subText }>
            Share Android builds of React Native apps
          </Text>
        </View>

        <View style={ styles.buttonContainer }>
          <TouchableOpacity
            style={ styles.button }
            opacity={ DEFAULT_BUTTON_OPACITY }
            onPress={ onPress }
          >
            <Text style={ styles.buttonText }> CONTINUE </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );

}

LandingPage.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const enhance = compose(

  withHandlers({
    onPress: ownerProps => () => {
      ownerProps.navigator.push({
        screen: screenRegistry.HOME_PAGE,
        backButtonHidden: true,
        navigatorStyle: {
          navBarHidden: true,
        },
      });
    },
  }),

);

export default enhance(LandingPage);

