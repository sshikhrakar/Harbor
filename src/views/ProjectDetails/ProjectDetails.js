import React from 'react';
import { View, Text } from 'react-native';

/**
 * View for details of a single project.
 *
 * @param {Object} props
 * @returns {JSX}
 */
function ProjectDetails(props) {
  return (
    <View>
      <Text> { props.selectedProject } </Text>
    </View>
  );
}

ProjectDetails.propTypes = {
};

export default ProjectDetails;
