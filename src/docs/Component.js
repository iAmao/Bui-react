import React from 'react';
import PropTypes from 'prop-types';

import Props from './Props';
import Example from './Example';


const Component = ({component}) => {
    const { name, description, props, examples } = component;

    return (
        <div id="bui-react-docs-component-container">
            <h2 id="bui-react-docs-component-name">{name}</h2>
            <p id="bui-react-docs-component-description">{description}</p>
            <h3 id="bui-react-docs-component-example-header">Example{examples.length > 1 && 's'}</h3>
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

            <h3 id="bui-react-docs-component-props-header">Props</h3>
            {
                props ?
                    <Props props={props} />
                    :
                    "This component accepts no props"
            }
        </div>
    )
}


Component.propTypes = {
    component: PropTypes.object.isRequired
}

export default Component;
