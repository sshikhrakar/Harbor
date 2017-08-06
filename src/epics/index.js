import '../rx';

function testEpic(action$) {
  return action$
    .ofType('TEST_ACTION')
    .delay(1000)
    .mapTo({ type: 'TEST_ACTION_FULFILLED' });
}

export default testEpic;
