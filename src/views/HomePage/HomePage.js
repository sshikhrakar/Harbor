import React from 'react';
import moment from 'moment';
import { ScrollView, RefreshControl } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

import styles from './styles';
import { ProjectOverviewCard } from '../../components';

function HomePage(props) {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={ props.isFetching }
          onRefresh={ props.fetchAllProjects }
        />
      }
      style={ styles.mainContainer }>

      {
        props.projects && Object.keys(props.projects).map((project, key) =>
          <ProjectOverviewCard
            key={ key }
            displayName={ props.projects[project].name }
            versionNumber={ props.projects[project].currentVersionNumber || 'v1.0.0' }
            lastUpdatedAt={ props.projects[project].metadata && format(props.projects[project].metadata.lastReleasedOn) || 'N/A' }
          />
        )
      }

    </ScrollView>
  );

}

/**
 * A helper to transform UNIX timestamps to human readable form.
 *
 * @param {Date} date
 * @returns {Date}
 */
const format = date => {
  return moment(date * 1000, 'x').format('DD-MM-YYYY');
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
