import React from 'react';
import { View, Text } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

function HomePage() {

  return (
    <View>
      <Text> HomePage </Text>
    </View>
  );

}

/*
 * Navigation bar style parameters.
 */
HomePage.navigatorStyle = {
  navBarTextFontSize: 20,
  navBarTextFontFamily: fonts.primary.REGULAR,
  navBarComponentAlignment: 'center',
  navBarBackgroundColor: colors.SILVER,
};

export default HomePage;
