import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ScrollView, RefreshControl } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

import styles from './styles';
import { ProjectOverviewCard } from '../../components';

function HomePage(props) {
  const {
    projects,
    isFetching,
    fetchAllProjects,
  } = props;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={ isFetching }
          onRefresh={ fetchAllProjects }
        />
      }
      style={ styles.mainContainer }>

      {
        projects && Object.keys(projects).map((project, key) =>
          <ProjectOverviewCard
            key={ key }
            displayName={ projects[project].name }
            versionNumber={ projects[project].currentVersionNumber || 'v1.0.0' }
            lastUpdatedAt={ projects[project].metadata && format(projects[project].metadata.lastReleasedOn) || 'N/A' }
          />
        )
      }

    </ScrollView>
  );

}

HomePage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  projects: PropTypes.object.isRequired,
  fetchAllProjects: PropTypes.func.isRequired,
};

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
