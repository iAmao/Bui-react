import React from 'react';
import PropTypes from 'prop-types';


/**
 * A super lame component
 */
function HelloWorld({message}) {
    return <h4>Hello {message}!</h4>
}

HelloWorld.defaultProps = {
    message: 'World'
}

HelloWorld.propTypes = {
    /** 
     * Message to display
     */
    message: PropTypes.string
}

export { HelloWorld };
