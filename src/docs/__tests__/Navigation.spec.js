import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Navigation from '../Navigation';
import componentData from '../../../config/jest/componentDataMock';

const DATA = componentData.map((component) => component.name);


describe('DOCS: Navigation', () => {

    describe('Snapshot Test', () => {
        test('renders navigation woth a list of props', () => {
            const tree = renderer.create(
                <Navigation components={DATA} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });


    describe('Unit Test', () => {
        test('renders a clickable link of components', () => {
            const wrapper = shallow(
                <Navigation components={DATA} />
            );
            expect(wrapper.find('li')).toHaveLength(DATA.length);
        });
    });
});