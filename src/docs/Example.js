import React from 'react';
import PropTypes from 'prop-types';

import { autobind } from 'core-decorators';

import Snippet from './Snippet';


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showCode: false };
    }

    @autobind toggleCode(event) {
        event.preventDefault();
        this.setState((prevState) => ({
            showCode: !prevState.showCode
        }));
    }

    render() {
        const { showCode } = this.state;
        const { code, description, name } = this.props.example;

        const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
        
        return (
            <div id="bui-react-docs-component-example-container">
                {
                    description &&
                    <h4 id="bui-react-docs-component-example-description">
                        {description}
                    </h4>
                 }

                <ExampleComponent />

                <p id="bui-react-docs-component-example-code">
                    <span className="link" id="bui-react-docs-component-example-code-toggle-btn" onClick={this.toggleCode}>
                        {showCode ? "Hide": "show"} Code
                    </span>
                </p>

                {showCode && <Snippet>{code}</Snippet>}
                {!this.props.last && <hr />}
            </div>
        )
    }
}

Example.propTypes = {
    last: PropTypes.bool,
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired
};


export default Example;
