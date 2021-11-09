/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('MockTest', () => {
  it('renders correctly', () => {
    // expect(2).toEqual(2)
    renderer.create(<App />);
  });
})


