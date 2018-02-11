import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount } from 'enzyme';

import Navigation from '../Navigation';
import componentData from '../../../config/jest/componentDataMock';

const DATA = componentData.map((component) => component.name);


describe('DOCS: Navigation', () => {

    describe('Snapshot Test', () => {
        test('renders navigation woth a list of props', () => {
            const tree = renderer.create(
                <Navigation components={DATA} path=""/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });


    describe('Unit Test', () => {
        test('renders a clickable link of components', () => {
            const wrapper = shallow(
                <Navigation components={DATA} path="" />
            );
            expect(wrapper.find('li')).toHaveLength(DATA.length + 2);
        });

        test('sets class of "Getting Started" link to active', () => {
          const wrapper = mount(
            <Navigation components={DATA} path="/" />
          );
          expect(wrapper.find('.active')).toHaveLength(1);
          expect(wrapper.find('.active Link').text()).toEqual('Getting started');
        });

        test('sets the class of "Button" component to active', () => {
          const wrapper = mount(
            <Navigation components={DATA} path="/button" />
          );
          expect(wrapper.find('.active')).toHaveLength(1);
          expect(wrapper.find('.active > Link').text()).toEqual('Button');
        });

    });
});