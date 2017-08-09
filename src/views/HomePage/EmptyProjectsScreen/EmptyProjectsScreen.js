import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';
import fonts from '../../../config/fonts';
import colors from '../../../config/colors';
import images from '../../../config/images';

function EmptyProjectsScreen() {

  return (
    <View style={ styles.emptyProjectsContainer }>
      <View style={ styles.imageContainer }>
        <Image
          source={ images.indifferentEmoji }
          style={ styles.image }
        />
      </View>

      <View style={ styles.textContainer }>
        <View style={ styles.mainTextContainer }>
          <Text style={ styles.mainText }>
            { `You don't seem to have been invited to any projects ...` }
          </Text>
        </View>

      </View>
    </View>
  );

}

/*
 * Navigation bar style parameters.
 */
EmptyProjectsScreen.navigatorStyle = {
  navBarTextFontSize: 20,
  navBarTextFontFamily: fonts.primary.REGULAR,
  navBarComponentAlignment: 'center',
  navBarBackgroundColor: colors.SILVER,
};


export default EmptyProjectsScreen;
