import React from 'react';
import PropTypes from 'prop-types';

import Props from './Props';
import Example from './Example';


const Component = ({component}) => {
    const { name, description, props, examples } = component;

    return (
        <div id="bui-react-docs-component-container">
            <h1 id="bui-react-docs-component-name">{name}</h1>
            <p id="bui-react-docs-component-description">{description}</p>
            <br /><br />
            <h3 id="bui-react-docs-component-example-header">Example{examples.length > 1 && 's'}</h3>
            {
                examples.length > 0 ?
                    examples.map((example, index) => (
                        <Example
                            example={example}
                            key={example.code}
                            componentName={name}
                            last={index === examples.length - 1}
                        />
                    ))
                    :
                    "No examples yet"
            }
            <br /><br />
            <h3 id="bui-react-docs-component-props-header">Props</h3>
            {
                props ?
                    <Props props={props} />
                    :
                    "This component accepts no props"
            }
        </div>
    )
};


Component.propTypes = {
    component: PropTypes.object.isRequired
};

export default Component;
