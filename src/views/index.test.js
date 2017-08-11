import * as views from './index';

describe('VIEWS: index', () => {

  it('should be exporting defined views', () => {
    for(let view of Object.keys(views)) {
      expect(views[view]).toBeDefined();
    }
  });

});
