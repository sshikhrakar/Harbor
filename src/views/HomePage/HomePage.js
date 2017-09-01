import React from 'react';
import moment from 'moment';
import { ScrollView } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

import styles from './styles';
import { ProjectOverviewCard } from '../../components';

function HomePage(props) {
  return (
    <ScrollView style={ styles.mainContainer }>

      {
        props.projects && Object.keys(props.projects).map((project, key) =>
          <ProjectOverviewCard
            key={ key }
            displayName={ props.projects[project].name }
            versionNumber={ props.projects[project].currentVersionNumber || 'v1.0.0' }
            lastUpdatedAt={ format(props.projects[project].metadata.lastReleasedOn) || 'N/A' }
          />
        )
      }

    </ScrollView>
  );

}

const format = date => {
  return moment(date * 1000, 'x').format('DD-MM-YYYY HH:MM:SS');
};

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
