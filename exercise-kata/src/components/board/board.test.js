import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'

let squares = Array(9).fill(null)
  const onClick = jest.fn();

it('renders without crashing', () => {
  shallow(<Board squares={squares} onClick={onClick}/>);
});

it('contains nine <Square/> components', () => {
  let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
  expect(wrapper.find('.square')).toHaveLength(9);
});

it('renders a square component when "renderSquare" is invoked', () => {
  const square = shallow(<Board squares={squares} onClick={onClick}/>).instance().renderSquare();
  expect(shallow(square).is('.Square')).toBe(false);
});

