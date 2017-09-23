import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, Image } from 'react-native';

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
    name,
    iconUrl,
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
            <Text style={styles.normalText}> Srishan Bhattarai </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonWithSpinner
            text="INSTALL"
            buttonStyle={styles.installButton}
            textStyle={styles.installButtonText}
            isLoading={false}
            onPress={() => true}
          />
        </View>
      </View>

      <HorizontalSeparator thickness={1.2} color={colors.GRAY_SEPARATOR} />

      <ScrollView style={styles.bodyContainer}>
        {
          Object.keys(props.selectedProject.uploads).map((ts, key) =>
            <View key={key}>
              <View style={styles.buildItemContainer}>
                <View style={styles.title}>
                  <Text style={styles.buildTitleText}>
                    {
                      'Version: ' + props.selectedProject.uploads[ts].version
                    }
                  </Text>
                  <Text style={styles.buildSubTitleText}>
                    {
                      format(ts)
                    }
                  </Text>
                </View>

                <View style={styles.changelog}>
                  <Text style={styles.buildNormalText}>
                    {
                      props.selectedProject.uploads[ts].changelog ?
                        props.selectedProject.uploads[ts].changelog :
                        '<No changelog available>'
                    }
                  </Text>
                </View>
              </View>
              <HorizontalSeparator thickness={0.8} color={colors.GRAY_SEPARATOR} />
            </View>
          )
        }
      </ScrollView>

    </View>
  );
}

ProjectDetails.propTypes = {
  selectedProject: PropTypes.object,
};

/**
 * A helper to transform UNIX timestamps to human readable form.
 *
 * @param {Date} date
 * @returns {Date}
 */
const format = date => {
  return moment(date * 1000, 'x').format('Do MMM YYYY, h:mm a');
};


export default ProjectDetails;
