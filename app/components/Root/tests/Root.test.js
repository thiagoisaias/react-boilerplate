import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'store/configureStore';
import Root from '../index';

describe('Root', () => {
  const mockProps = {
    store: configureStore()
  };

  const component = shallow(<Root {...mockProps} />);

  it('renders properly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
