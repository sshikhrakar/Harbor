import React, { Component } from 'react';
import FCM, { FCMEvent } from 'react-native-fcm';

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

  return EnhancedComponent;
};

export default withFCMHandlers;
