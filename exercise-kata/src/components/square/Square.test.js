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

it('has an "onClick" property', () => {
    expect(shallow(<Square/>).props()).toHaveProperty('onClick');
});

