import React from 'react';
import PropTypes from 'prop-types';


/**
 * Button Component
 */
function Button({ children, ...props}) {
    return (
        <button {...props}>
            {children}
        </button>
    );
}


Button.propTypes = {
    /**
     * Child elements for the button component
     */
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default Button;
