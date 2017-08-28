import { connect } from 'react-redux';
import React, { Component } from 'react';
import FCM, { FCMEvent } from 'react-native-fcm';

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
      FCM.getFCMToken().then(token => {
        this.props.registerFcmToken(token);
      });

      this.notificationListener = FCM.on(FCMEvent.Notification, notif => {
        if (notif.local_notification) {} // eslint-disable-line
        if (notif.opened_from_tray) {} // eslint-disable-line
      });
    }

    /**
     * Remove token listeners.
     */
    componentWillUnmount() {
      this.notificationListener.remove();
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
