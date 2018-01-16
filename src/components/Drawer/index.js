import React from 'react';
import PropTypes from 'prop-types';

/**
 * Drawer component
 */
function Drawer (props) {
    if (props.isOpen) {
       return (
            <div id="bui-react-sidebar-container">
                <div id="bui-react-sidebar" >
                    {props.children} 
                </div>
            </div>
       )
    }
    return  <div />
};

Drawer.defaultProps = {
    isOpen: false
};

Drawer.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export { Drawer };
