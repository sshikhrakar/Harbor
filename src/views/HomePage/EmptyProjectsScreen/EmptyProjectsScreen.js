import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';
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
            { `You don't seem to have added any projects..` }
          </Text>
        </View>

        <View style={ styles.subTextContainer }>
          <Text style={ styles.subText }>
            { `Press the Add button on the top right to get started` }
          </Text>
        </View>
      </View>
    </View>
  );

}

export default EmptyProjectsScreen;
