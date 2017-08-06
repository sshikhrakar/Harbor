import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { branch, renderComponent } from 'recompose';

import EmptyProjectsScreen from './EmptyProjectsScreen';

function HomePage() {

  return (
    <View>
      <Text> HomePage </Text>
    </View>
  );

}

HomePage.propTypes = {
  projects: PropTypes.array.isRequired,
};

const enhance = branch(
  props => props.projects.length === 0,
  renderComponent(EmptyProjectsScreen)
);

export default enhance(HomePage);
