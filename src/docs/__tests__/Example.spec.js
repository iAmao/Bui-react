import React from 'react';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';

import Example from '../Example';
import componentData from '../../../config/jest/componentDataMock';

const DATA = componentData[0];


describe('Docs:Example', () => {

    describe('Snapshot Test', () => {
        test('renders component without description', () => {
            const data = { ...componentData[0]};
            data.description = null;
            const tree = renderer.create(
                <Example
                    example={data.examples[0]}
                    componentName={data.name}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('renders component with description', () => {
            const data = { ...componentData[0]};
            const tree = renderer.create(
                <Example
                    example={data.examples[0]}
                    componentName={data.name}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });

    describe('Integration Test', () => {
        test('renders and mount the component its child components', () => {
            const wrapper = mount(
                <Example
                    example={DATA.examples[0]}
                    componentName={DATA.name}
                />
            )
            expect(wrapper.find({ id: 'bui-react-docs-component-example-description' })).toHaveLength(1);
            expect(wrapper.find({ id: 'bui-react-docs-component-example-code' })).toHaveLength(1);
        });

        test('renders the example code on toggle', () => {
            const wrapper = mount(
                <Example
                    example={DATA.examples[0]}
                    componentName={DATA.name}
                />
            )
            wrapper.find({ id: 'bui-react-docs-component-example-code-toggle-btn' }).simulate('click');
            expect(wrapper.find({ id: 'bui-react-docs-component-code-snippet-container' })).toHaveLength(1);
        });

    });

});

