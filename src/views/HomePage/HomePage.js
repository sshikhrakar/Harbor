import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { compose, withProps } from 'recompose';

import styles from './styles';
import images from '../../config/images';
import colors, { DEFAULT_BUTTON_OPACITY } from '../../config/colors';

function LoginPage(props) {

  const { onPress } = props;

  return (
    <View style={ styles.homePageContainer }>
      <View style={ styles.logoContainer}>
        <Image
          style={ styles.homePageLogo }
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

const enhance = compose(
  withProps({
    onPress() {
      console.log('Home button pressed.'); // eslint-disable-line no-console
    },
  }),
);

export default enhance(LoginPage);
