import {
  branch,
  renderNothing,
} from 'recompose';
/**
 * Hide element if predicate is true.
 *
 * @param {Function} predicate - a function that'll be called with props.
 * @returns {Component}
 */
function hideElementIf(predicate) {
  return branch(predicate, renderNothing);
}

export default hideElementIf;
