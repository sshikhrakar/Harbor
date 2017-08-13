import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import { ButtonWithSpinner } from '../../components';

import styles from './styles';
import colors from '../../config/colors';
import images from '../../config/images';

function NewAccount(props) {

  const {
    onSubmit,
    onCancel,
    emailText,
    isSigningUp,
    passwordText,
    setEmailText,
    setPasswordText,
  } = props;

  return (
    <View style={ styles.modalContainer }>

      <View style={ styles.logoContainer}>
        <Image
          style={ styles.landingPageLogo }
          source={ images.harborLogo }
          tintColor={ colors.GREY }
        />
      </View>

      <View style={ styles.greetingContainer}>
        <Text style={ styles.subText }>
          CREATE AN ACCOUNT
        </Text>
      </View>

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

      <View style={ styles.modalButtonsContainer }>
        <ButtonWithSpinner
          buttonStyle={ styles.button }
          isLoading={ isSigningUp }
          text="CREATE"
          onPress={ onSubmit }
        />

        <ButtonWithSpinner
          buttonStyle={ styles.cancelButton }
          isLoading={ false }
          text="CANCEL"
          onPress={ onCancel }
        />
      </View>

    </View>
  );

}

NewAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  emailText: PropTypes.string.isRequired,
  isSigningUp: PropTypes.bool.isRequired,
  passwordText: PropTypes.string.isRequired,
  setEmailText: PropTypes.func.isRequired,
  setPasswordText: PropTypes.func.isRequired,
};

export default NewAccount;
