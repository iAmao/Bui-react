import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Icon from '../';

describe('Icon', () => {

    describe('Snapshot Test', () => {

        test('renders display with an "aperture" icon ', () => {
            const tree = renderer.create(<Icon icon="aperture" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    
    });

    describe('Unit Test', () => {

        test('displays a "loop" icon', () => {
            const wrapper = shallow(
                <Icon icon="loop" />
            );
            expect(wrapper.length).toEqual(1);
        });

        test('renders with a custom style', () => {
            const wrapper = shallow(
                <Icon
                    icon="loop"
                    style={{
                        padding: 10,                        
                        color: 'red'
                    }}
                />
            );
        
            expect(wrapper.length).toEqual(1);
        })

    });

});