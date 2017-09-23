import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { HorizontalSeparator, ButtonWithSpinner } from '../../components';

import styles from './styles';
import colors from '../../config/colors';

/**
 * View for details of a single project.
 *
 * @param {Object} props
 * @returns {JSX}
 */
function ProjectDetails(props) {
  const {
    iconUrl,
    name,
    packageName,
  } = props.selectedProject;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Image
            resizeMethod='scale'
            style={styles.projectIcon}
            source={{ uri: iconUrl }}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.boldText}> {name} </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.normalText}> {packageName} </Text>
          </View>
        </View>

        <View style={ styles.buttonContainer }>
          <ButtonWithSpinner
            text="INSTALL"
            buttonStyle={ styles.installButton }
            textStyle={ styles.installButtonText }
            isLoading={ false }
            onPress={ () => true }
          />
        </View>
      </View>

      <HorizontalSeparator
        thickness={0.8}
        color={colors.GRAY_SEPARATOR}
      />

    </View>
  );
}

ProjectDetails.propTypes = {
  selectedProject: PropTypes.object,
};

export default ProjectDetails;
