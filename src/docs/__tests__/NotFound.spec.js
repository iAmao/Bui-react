import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import NotFound from '../NotFound';


describe('DOCS: NotFound', () => {

    describe('Snapshot Test', () => {

        test('renders a 404 message on page', () => {
            const tree = renderer.create(<NotFound />).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });

    describe('Unit Test', () => {

        test('renders a 404 message on page', () => {
            const wrapper = shallow(<NotFound />)
            expect(wrapper.find('#bui-react-docs-component-not-found h3')).toHaveLength(1);
        });

    });
});
