import * as components from './index';

describe('COMPONENTS: index', () => {

  it('should be exporting defined components', () => {
    for(let component of Object.keys(components)) {
      expect(components[component]).toBeDefined();
    }
  });

});
