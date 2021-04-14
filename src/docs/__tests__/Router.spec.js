import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Router from '../Router';


describe('Doc: Router', () => {
    describe('Snapshot Test', () => {
        it('renders the component page', () => {
            const tree = renderer.create(
                <Router render={() => <div id="some" />} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Unit Test', () => {
        it('should pop history state', () => {
            const wrapper = shallow(<Router render={() => <div />} />);
            wrapper.instance().popState()
            expect(wrapper.instance().state).toEqual({ location: { path: '/' } })
        });

        it('should set a new path as state and push to new state', () => {
            const wrapper = shallow(<Router render={() => <div />} />);
            wrapper.instance().push('/button')
            expect(wrapper.instance().state).toEqual({ location: { path: '/button' } })
        });

        it('should go back to previous path', () => {
            window.history.pushState(null, '', '/item');
            const wrapper = shallow(<Router render={() => <div />} />);
            window.history.pushState(null, '', '/button');
            wrapper.instance().back()
            expect(wrapper.instance().state).toEqual({ location: { path: '/item' } })
        });
    });
});
