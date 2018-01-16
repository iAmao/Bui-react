import React from 'react';
import PropTypes from 'prop-types';

import Snippet from './Snippet';


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showCode: false };
    }

    toggleCode(event) {
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
            <div>
                {description && <h4>{description}</h4>}

                <ExampleComponent />

                <p>
                    <a href="#" onClick={this.toggleCode.bind(this)}>
                        {showCode ? "Hide": "show"} Code
                    </a>
                </p>


                {showCode && <Snippet>{code}</Snippet>}
            </div>
        )
    }
}

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired
}


export default Example;
