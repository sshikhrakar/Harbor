import React from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import { TextLink, ButtonWithSpinner } from '../../components';

import styles from './styles';
import images from '../../config/images';
import colors from '../../config/colors';

function LandingPage(props) {

  const {
    emailText,
    errorText,
    isLoggingIn,
    passwordText,
    setEmailText,
    setPasswordText,
    onLoginButtonPress,
    onCreateAccountPress,
    onCreateAccountModalClose,
    createAccountModalVisibility,
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

      <Modal
        animationType={ 'slide' }
        transparent={ false }
        visible={ createAccountModalVisibility }
        onRequestClose={ onCreateAccountModalClose }
      >
        <View>
          <Text>Hello world</Text>
        </View>
      </Modal>


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

        <ButtonWithSpinner
          isLoading={ isLoggingIn }
          text="LOGIN"
          onPress={ onLoginButtonPress }
        />

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
  isLoggingIn: PropTypes.bool.isRequired,
  emailText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  setEmailText: PropTypes.func.isRequired,
  passwordText: PropTypes.string.isRequired,
  setPasswordText: PropTypes.func.isRequired,
  onLoginButtonPress: PropTypes.func.isRequired,
  onCreateAccountPress: PropTypes.func.isRequired,
  onCreateAccountModalClose: PropTypes.func.isRequired,
  createAccountModalVisibility: PropTypes.bool.isRequired,
};


export default LandingPage;
