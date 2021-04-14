import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';

import App from '../App';


describe('DOCS: App', () => {

    describe('Snapshot Test', () => {
        it('renders the "Getting Started" page for url "/"', () => {
            const tree = renderer.create(<App />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders the "Theming" page for url "/theming"', () => {
            window.history.pushState(null, '', '/theming')
            const tree = renderer.create(<App />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders the "Component" page for url "/:id"', () => {
            window.history.pushState(null, '', '/button')
            const tree = renderer.create(<App />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders 404 page if a valid route is not found', () => {
            window.history.pushState(null, '', '/onlyone')
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
            window.history.pushState(null, '', '/random/page')
            const wrapper = mount(<App />);

            expect(wrapper.find({ id: 'bui-react-docs-component-not-found' })).toHaveLength(1);
            expect(wrapper.find({ id: 'bui-react-docs-component-not-found' }).children().text()).toEqual('404!');
        });
    });
});
