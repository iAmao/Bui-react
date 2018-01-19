import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';

import App from '../App';


describe('DOCS: App', () => {

    describe('Snapshot Test', () => {
        it('renders the component page if a valid route is found', () => {
            const tree = renderer.create(<App />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders 404 page if a valid route is not found', () => {
            const tree = renderer.create(<App location="lol" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Integration Test', () => {
        it('renders documentation and examples', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App />, div);
            ReactDOM.unmountComponentAtNode(div);
        });

        it('renders not found page on non-existent components', () => {
            const wrapper = mount(<App location='abc' />);

            expect(wrapper.find({ id: 'bui-react-docs-component-not-found' })).toHaveLength(1);
            expect(wrapper.find({ id: 'bui-react-docs-component-not-found' }).children().text()).toEqual('404!');
        });
    });
});
