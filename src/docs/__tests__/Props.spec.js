import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Props from '../Props';
import componentData from '../../../config/jest/componentDataMock';


describe('DOCS: Props', () => {

    describe('Snapshot Test', () => {
        test('renders component with props', () => {
            const data = { ...componentData[0]};
            data.description = null;
            const tree = renderer.create(
                <Props props={componentData[0].props} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        test('renders component without props', () => {
            const tree = renderer.create(
                <Props props={{}} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        })
    });

    describe('Unit Test', () => {
        test('renders all props data', () => {
            const data = {
                ...componentData[0].props,
                children: {
                  ...componentData[0].props.children,
                  defaultValue: '<div />'
                }
            };
            const wrapper = shallow(<Props props={data} />);
            expect(wrapper.find('table')).toHaveLength(1);
            expect(wrapper.find('tbody > tr')).toHaveLength(Object.keys(componentData[0].props).length);
        });
        test('renders empty body rows when there are no props', () => {
            const wrapper = shallow(<Props props={{}} />);
            expect(wrapper.find('table')).toHaveLength(1);
            expect(wrapper.find('tbody > tr')).toHaveLength(0);
        });
    });
});
