import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { TextLink } from '../../components';

import styles from './styles';
import images from '../../config/images';
import colors, { DEFAULT_BUTTON_OPACITY } from '../../config/colors';

function LandingPage(props) {

  const {
    emailText,
    errorText,
    passwordText,
    setEmailText,
    setPasswordText,
    onLoginButtonPress,
    onCreateAccountPress,
  } = props;

  return (
    <View style={ styles.landingPageContainer }>

      <View style={ styles.logoContainer}>
        <Image
          style={ styles.landingPageLogo }
          source={ images.harborLogo }
          tintColor={ colors.GREY }
        />
      </View>

      <View style={ styles.greetingContainer}>
        <Text style={ styles.mainText }>
          HARBOR
        </Text>
        <Text style={ styles.subText }>
          Share Android builds of React Native apps
        </Text>
      </View>

      <View style={ styles.loginContainer }>
        <Text style={ styles.loginText }>
          LOGIN TO CONTINUE
        </Text>

        {
          errorText ?
            <Text style={ styles.error }>
              { errorText }
            </Text>
            : null
        }

        <View style={ styles.emailPasswordContainer }>
          <TextInput
            value={ emailText }
            placeholder={ 'E-mail' }
            onChangeText={ setEmailText }
            style={ styles.textInputField }
            keyboardType="email-address"
            underlineColorAndroid={ 'transparent' }
          />
          <TextInput
            value={ passwordText }
            secureTextEntry= { true }
            placeholder={ 'Password' }
            style={ styles.textInputField }
            onChangeText={ setPasswordText }
            underlineColorAndroid={ 'transparent' }
          />
        </View>

        <View style={ styles.loginButtonContainer }>
          <TouchableOpacity
            style={ styles.button }
            onPress= { onLoginButtonPress }
            activeOpacity={ DEFAULT_BUTTON_OPACITY }
          >
            <Text style={ styles.loginButtonText }>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        <TextLink
          onPress={ onCreateAccountPress }
          text="Or, Create an Account."
          style={ styles.link }
        />

      </View>
    </View>
  );

}

LandingPage.propTypes = {
  emailText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  setEmailText: PropTypes.func.isRequired,
  passwordText: PropTypes.string.isRequired,
  setPasswordText: PropTypes.func.isRequired,
  onLoginButtonPress: PropTypes.func.isRequired,
  onCreateAccountPress: PropTypes.func.isRequired,
};


export default LandingPage;
