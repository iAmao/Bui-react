import React from 'react';
import PropTypes from 'prop-types';


const colorScheme = {
    primary: '#236167',
    secondary: '#000000',
    danger: '#AA3939'
}

/**
 * Button Component
 */
function Button({ children, ...props}) {
    return (
        <button {...props} style={style(props.type)}>
            {children}
        </button>
    );
}

const style = (type) => ({
    color: '#FFFFFF',
    backgroundColor: colorScheme[type],
    padding: 10,
    width: 120,
    border: 'none'
});

Button.propTypes = {
    /**
     * Child elements for the button component
     */
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    /**
     * type of button can be one of "primary", "secondary" or "danger"
     */
    type: PropTypes.oneOf(['primary', 'secondary', 'danger'])
}

export default Button;
