import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, render } from 'enzyme';

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

        test('Button should display text props if no children props', () => {
            const wrapper = shallow(
                <Button text="Hello!"/>
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

        test('Button should display an icon', () => {
            const wrapper = render(
                <Button icon="eye">Hello!</Button>
            );

            expect(wrapper.length).toEqual(1);
            expect(wrapper.text().search('Hello!')).toEqual(0);
            expect(wrapper.children().children().children()[0].name).toEqual('svg');
        });
    });
    
});
