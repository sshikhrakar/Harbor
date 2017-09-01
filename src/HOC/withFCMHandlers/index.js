import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as firebaseService from '../../services/firebase';
import { registerFcmToken } from '../../actions/fcmActions';

/**
 * Adds FCM handlers. Only ever wraps the top level component.
 *
 * @returns {function}
 */
const withFCMHandlers = () => WrappedComponent => {
  class EnhancedComponent extends Component {

    /**
     * Wait for FCM token, call onTokenReceive with the value.
     */
    componentDidMount() {
      firebaseService
        .getInstance()
        .messaging()
        .getToken()
        .then(token => {
          this.props.registerFcmToken(token);
        });
    }

    render() {
      return (
        <WrappedComponent { ...this.props } />
      );
    }

  }

  const mapDispatchToProps = {
    registerFcmToken,
  };

  return connect(null, mapDispatchToProps)(EnhancedComponent);
};

export default withFCMHandlers;
