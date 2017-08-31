import React from 'react';
import { ScrollView } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

import styles from './styles';
import { ProjectOverviewCard } from '../../components';

function HomePage() {

  return (
    <ScrollView style={ styles.mainContainer }>
      <ProjectOverviewCard />
      <ProjectOverviewCard />
    </ScrollView>
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
