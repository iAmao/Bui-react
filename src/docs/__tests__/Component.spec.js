import React from 'react';
import renderer from 'react-test-renderer';

import { mount, shallow } from 'enzyme';

import Component from '../Component';
import componentData from '../../../config/jest/componentDataMock';

const DATA = componentData[0];


describe('DOCS: Component', () => {

    describe('Snapshot Test', () => {
        test('renders component with examples alone', () => {
            const data = { ...componentData[0]};
            data.props = null;
            const tree = renderer.create(<Component component={data} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('renders component with props alone', () => {
            const data = { ...componentData[0]};
            data.examples = [];
            const tree = renderer.create(<Component component={data} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('renders component with props and examples', () => {
            const tree = renderer.create(<Component component={DATA} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('renders component without props and examples', () => {
            const data = { ...componentData[0]};
            data.examples = [];
            data.props = null;
            const tree = renderer.create(<Component component={data} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Integration Test', () => {
        test('renders and mount the component', () => {
            const wrapper = mount(<Component component={DATA} />)
            expect(wrapper.find({ id: 'bui-react-docs-component-example-container' })).toHaveLength(1);
            expect(wrapper.find({ id: 'bui-react-docs-component-props-container' })).toHaveLength(1);
        });

        test('renders without examples if no examples in metadata', () => {
            const data = { ...DATA};
            data.examples = [];
            const wrapper = mount(<Component component={data} />)
            expect(wrapper.find({ id: 'bui-react-docs-component-example-container' })).toHaveLength(0);
            expect(wrapper.find({ id: 'bui-react-docs-component-props-container' })).toHaveLength(1);
        });

        test('renders without props if no props in metadata', () => {
            const data = { ...DATA};
            data.props = null;
            const wrapper = mount(<Component component={data} />);
            expect(wrapper.find({ id: 'bui-react-docs-component-example-container' })).toHaveLength(1);
            expect(wrapper.find({ id: 'bui-react-docs-component-props-container' })).toHaveLength(0);
        });
    });

    describe('Unit Test', () => {
        test('renders and displays basic metadata about component', () => {
            const wrapper = shallow(<Component component={DATA} />);
            expect(wrapper.find({ id: 'bui-react-docs-component-name' }).text()).toEqual(componentData[0].name);
            expect(wrapper.find({ id: 'bui-react-docs-component-description' }).text()).toEqual(componentData[0].description);
        });

        test('should render a plural of "Example" when multiple examples are present', () => {
          const data  = { ...DATA, examples: [...DATA.examples, DATA.examples[0]] };
          const wrapper = shallow(<Component component={data} />);
          expect(wrapper.find('#bui-react-docs-component-example-header').text()).toEqual('Examples');
        });

    });

});

