import React from 'react';
import PropTypes from 'prop-types';

import { Drawer } from 'bui-react';

import Props from './Props';
import Example from './Example';
import Navigation from './Navigation';

import componentData from '../../config/componentData';



const ComponentPage = ({component}) => {
    const { name, description, props, examples } = component;

    return (
        <div>
            <Drawer>
                <Navigation component={componentData.map((component) => component.name)} />
            </Drawer>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>Example{examples.length > 1 && 's'}</h3>
                {
                    examples.length > 0 ?
                        examples.map((example) => (
                            <Example
                                example={example}
                                key={example.code}
                                componentName={name}
                            />
                        ))
                        :
                        "No examples yet"
                }

                <h3>Props</h3>
                {
                    props ?
                        <Props props={props} />
                        :
                        "This component accepts no props"
                }
            </div>
        </div>
    )
}


ComponentPage.propTypes = {
    component: PropTypes.object.isRequired
}

export default ComponentPage;
