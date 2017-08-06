import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <HomePage
        projects={ this.props.projects }
        { ...this.props }
      />
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

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps, null)(HomePageContainer);
