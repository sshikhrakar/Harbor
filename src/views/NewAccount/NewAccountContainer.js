import {
  compose,
  withState,
} from 'recompose';
import { connect } from 'react-redux';

import NewAccount from './NewAccount';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  
});

export const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState(),
);

export default enhance(NewAccount);
