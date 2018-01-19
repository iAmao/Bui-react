import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Button from '../';


describe('Button', () => {

    describe('Snapshot Test', () => {

        test('renders display with a single child component', () => {
            const tree = renderer.create(<Button>Hello!</Button>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    
    });
    

    describe('Unit Test', () => {

        test('Button should display a text "Hello!"', () => {
            const wrapper = shallow(
                <Button>Hello!</Button>
            );
            expect(wrapper.length).toEqual(1);
            expect(wrapper.text()).toEqual('Hello!');
        });

        test('Button should take in onClick props and call it on click event', () => {
            const mock = jest.fn();
            const onClick = new mock();
            
            const wrapper = shallow(
                <Button onClick={() => onClick}>
                    Click me!
                </Button>
            )
            wrapper.find('button').simulate('click');

            expect(mock.mock.calls.length).toBe(1);
        });
    });
    
});
