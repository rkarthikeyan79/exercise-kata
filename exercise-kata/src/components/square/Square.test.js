import React from 'react'
import Square from './Square'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Square/>);
});

it('renders the value passed to it', () => {
    const value = 'X';
    expect(shallow(<Square value={value}/>).text()).toBe(value);
});
