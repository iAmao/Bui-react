import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';


class Snippet extends React.Component {
    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightBlock(this.element);
    }

    render() {
        return (
            <pre
                id="bui-react-docs-component-code-snippet-container"
                ref={(ref) => { this.element = ref }}>
                <code>
                    {this.props.children}
                </code>
            </pre>
        )
    }
}

Snippet.propTypes = {
    children: PropTypes.string.isRequired
}

export default Snippet;
