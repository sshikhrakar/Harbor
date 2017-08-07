import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  compose,
  withHandlers,
} from 'recompose';

import styles from './styles';
import images from '../../config/images';
import { DEFAULT_BUTTON_OPACITY } from '../../config/colors';

function AddProject(props) {

  const { onPress } = props;

  return (
    <View style={ styles.addProjectContainer }>
      <View style={ styles.headerContainer }>
        <View style={ styles.downArrowContainer }>
          <TouchableOpacity
            onPress= { onPress }
            activeOpacity={ DEFAULT_BUTTON_OPACITY }
          >
            <Image
              source={ images.downArrowIcon }
              style={ styles.downArrowIcon }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ styles.bodyContainer }>
      </View>
    </View>
  );

}

const enhance = compose(
  withHandlers({
    onPress: ownerProps => () => {
      ownerProps.navigator.dismissModal({
        animationType: 'slide-down',
      });
    },
  }),
);

export default enhance(AddProject);
