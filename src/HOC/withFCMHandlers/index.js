import React, { Component } from 'react';
import FCM, { FCMEvent } from 'react-native-fcm';

/**
 * Adds FCM handlers. Only ever wraps the top level component.
 *
 * @param {function} onTokenReceive - callback for when the token is received.
 * @returns {Function}
 */
const withFCMHandlers = (onTokenReceive = () => true) => WrappedComponent => {
  class EnhancedComponent extends Component {

    /**
     * Wait for FCM token, call onTokenReceive with the value.
     */
    componentDidMount() {
      FCM.getFCMToken().then(token => {
        onTokenReceive(token);
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
