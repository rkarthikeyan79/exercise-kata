import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Board />);
});

it('contains nine <Square/> components', () => {
  let wrapper = mount(<Board />);
  expect(wrapper.find('.square')).toHaveLength(9);
});

it('renders a square component when "renderSquare" is invoked', () => {
  const square = shallow(<Board/>).instance().renderSquare();
  expect(shallow(square).is('.Square')).toBe(false);
});

