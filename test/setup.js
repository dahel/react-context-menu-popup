import React from 'react'
import {
    shallow,
    mount,
    render
} from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon';

import jsdom from 'jsdom';

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = document.defaultView;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.sinon = sinon;


Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

function noop() {
  return {};
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;