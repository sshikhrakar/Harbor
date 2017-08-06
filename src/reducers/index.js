const initialState = {
  message: 'hello world!',
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'TEST_ACTION_FULFILLED':
      return {
        ...state,
        message: 'hello world changed!',
      };

    case 'TEST_ACTION':
      return {
        ...state,
        message: 'Not how it should\'ve been!',
      };

    default:
      return state;
  }
}

export default rootReducer;
