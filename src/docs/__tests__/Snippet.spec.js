import React from 'react';

import { mount } from 'enzyme';

import Snippet from '../Snippet';


describe('DOCS: Snipper', () => {

    /**
     * TODO: Add snapshot tests for this component.
     * ATM, using the snapshot with highlight.js breaks things.
     */

    describe('Unit Test', () => {
        test('renders code snippet with javascript syntax', () => {
            const wrapper = mount(
                <div>
                    <Snippet>
                        import React from 'react'
                    </Snippet>
                </div>
            );
            expect(wrapper.find('code')).toHaveLength(1)
        });
    });
});
