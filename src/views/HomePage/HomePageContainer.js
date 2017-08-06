import React, { Component } from 'react';

import HomePage from './HomePage';
import fonts from '../../config/fonts';
import images from '../../config/images';
import colors from '../../config/colors';

class HomePageContainer extends Component {

  constructor(props) {
    super(props);

    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  /**
   * Navigation event handler.
   *
   * @param {event} event
   */
  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'addProject') {
        console.log('Add button pressed.'); // eslint-disable-line no-console
      }
    }
  }

  render() {
    return (
      <HomePage { ...this.props } />
    );
  }

}

/*
 * Navigation bar style parameters.
 */
HomePageContainer.navigatorStyle = {
  navBarTextFontSize: 20,
  navBarTextFontFamily: fonts.primary.REGULAR,
  navBarComponentAlignment: 'center',
  navBarBackgroundColor: colors.SILVER,
};

HomePageContainer.navigatorButtons = {
  rightButtons: [
    {
      icon: images.plusSign,
      id: 'addProject',
      buttonColor: colors.BLACK,
      disableIconTint: true,
      buttonFontSize: 12,
    },
  ],
};


export default HomePageContainer;
