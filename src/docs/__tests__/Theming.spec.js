import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Theming from '../Theming';


describe('DOCS: Back', () => {
    describe('Snapshot Test', () => {
        it('renders the theming page', () => {
            const tree = renderer.create(
                <Theming />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Unit Test', () => {
        it('should render a page showing instructions on theming', () => {
            const wrapper = shallow(<Theming />);

            expect(wrapper.text()).toEqual('Theming');
        })
    });
});
