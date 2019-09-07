import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});

it('has a "playerTurn" property which defaults to "X"', () => {
  expect(shallow(<Game/>).state().xIsNext).toBe(true);
});